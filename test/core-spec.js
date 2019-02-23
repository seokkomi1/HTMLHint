const expect = require('expect.js');

const HTMLHint = require('../index').HTMLHint;

describe('Core', function() {
  it('Set false to rule not affected should result in an error', function() {
    const code = '<head><script src="test.js"></script></head>';
    const messages = HTMLHint.verify(code, {
      'head-require': false
    });
    expect(messages.length).to.be(0);
  });

  it('Not load default ruleset when use undefined ruleset should result in an error', function() {
    const code =
      '<P ATTR=\'13\' id="UPPERCASE">><div id="aaaBBB" class="ccc-ddd"></div>';
    const messages = HTMLHint.verify(code);
    expect(messages.length).to.be(6);
  });

  it('Not load default ruleset when use empty ruleset should result in an error', function() {
    const code =
      '<P ATTR=\'13\' id="UPPERCASE">><div id="aaaBBB" class="ccc-ddd"></div>';
    const messages = HTMLHint.verify(code, {});
    expect(messages.length).to.be(6);
  });

  it('Inline ruleset not worked should result in an error', function() {
    let code =
      '<!-- htmlhint id-class-value:true-->\r\n<div id="aaaBBB" class="ccc-ddd"></div>';
    let messages = HTMLHint.verify(code, {
      'id-class-value': false
    });

    expect(messages.length).to.be(2);
    expect(messages[0].rule.id).to.be('id-class-value');
    expect(messages[0].line).to.be(1);
    expect(messages[0].col).to.be(5);
    expect(messages[0].type).to.be('warning');
    expect(messages[1].rule.id).to.be('id-class-value');
    expect(messages[1].line).to.be(1);
    expect(messages[1].col).to.be(17);
    expect(messages[1].type).to.be('warning');

    code =
      '<!-- htmlhint id-class-value:false-->\r\n<div id="aaaBBB" class="ccc-ddd"></div>';
    messages = HTMLHint.verify(code, {
      'id-class-value': true
    });
    expect(messages.length).to.be(0);
  });

  it('Show formated result should not result in an error', function() {
    const code =
      'tttttttttttttttttttttttttttttttttttt中文<div id="aaaBBB" class="ccc-ddd">tttttttttttttttttttttttttttttttttttttttttttttt';
    const messages = HTMLHint.verify(code, {
      'tag-pair': true,
      'id-class-value': true
    });
    let arrLogs = HTMLHint.format(messages);
    expect(arrLogs.length).to.be(2);

    arrLogs = HTMLHint.format(messages, {
      colors: true,
      indent: 4
    });
    const log = arrLogs[0];
    expect(/\[37m/.test(log)).to.be(true);
    expect(/    L1 /.test(log)).to.be(true);
    expect(/|\.\.\./.test(log)).to.be(true);
    expect(/t\.\.\./.test(log)).to.be(true);
  });
});
