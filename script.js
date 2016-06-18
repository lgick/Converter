function LG(data) {
  var that = this;

  this._document = data.document;
  this._select = data.select;

  this._select.onchange = function (e) {
    var choice = e.target.value;

    if (choice === 'inch <-> cm') {
      that.init__i_c();
    } else if (choice === 'USD <-> RUB') {
      that.init__d_r();
    } else if (choice === 'EUR <-> RUB') {
      that.init__e_r();
    } else if (choice === 'GBP <-> RUB') {
      that.init__g_r();
    }
  };

  this.init__i_c();
}

LG.prototype.init__i_c = function () {
  var input1 = this._document.getElementById('LG_input1Value');
  var input2 = this._document.getElementById('LG_input2Value');
  var ratio = 2.54;

  input1.value = '';
  input2.value = '';
  input1.placeholder = 'in';
  input2.placeholder = 'cm';

  input1.oninput = function (e) {
    var value = parseFloat(e.target.value || 0);

    value = parseFloat((value * ratio).toFixed(2));

    if (value) {
      input2.value = value + ' cm';
    } else {
      input2.value = '';
    }
  };

  input2.oninput = function (e) {
    var value = parseFloat(e.target.value || 0);

    value = parseFloat((value / ratio).toFixed(2));

    if (value) {
      input1.value = value + ' in';
    } else {
      input1.value = '';
    }
  };
};

LG.prototype.init__d_r = function () {
  var input1 = this._document.getElementById('LG_input1Value');
  var input2 = this._document.getElementById('LG_input2Value');

  input1.value = '';
  input2.value = '';
  input1.placeholder = 'USD';
  input2.placeholder = 'RUB';

  input1.oninput = function (e) {};
  input2.oninput = function (e) {};
};

LG.prototype.init__e_r = function () {
  var input1 = this._document.getElementById('LG_input1Value');
  var input2 = this._document.getElementById('LG_input2Value');

  input1.value = '';
  input2.value = '';
  input1.placeholder = 'EUR';
  input2.placeholder = 'RUB';

  input1.oninput = function (e) {};
  input2.oninput = function (e) {};
};

LG.prototype.init__g_r = function () {
  var input1 = this._document.getElementById('LG_input1Value');
  var input2 = this._document.getElementById('LG_input2Value');

  input1.value = '';
  input2.value = '';
  input1.placeholder = 'GBP';
  input2.placeholder = 'RUB';

  input1.oninput = function (e) {};
  input2.oninput = function (e) {};
};

(function (window, url, container) {
  'use strict';

  var document = window.document
    , container = document.getElementById(container)
    , frag = document.createDocumentFragment()
    , home = document.createElement('a')
    , input1 = document.createElement('input')
    , input2 = document.createElement('input')
    , select = document.createElement('select')
    , option1 = document.createElement('option')
    , option2 = document.createElement('option')
    , option3 = document.createElement('option')
    , option4 = document.createElement('option')
  ;

  home.id = 'LG_homeButton';
  select.id = 'LG_selectValue';
  input1.id = 'LG_input1Value';
  input2.id = 'LG_input2Value';

  home.title = 'github';

  input1.type = 'text';
  input1.placeholder = '';
  input2.type = 'text';
  input2.placeholder = '';
  home.href = 'https://github.com/lgick/Converter';

  option1.innerHTML = 'inch <-> cm';
  option2.innerHTML = 'USD <-> RUB';
  option3.innerHTML = 'EUR <-> RUB';
  option4.innerHTML = 'GBP <-> RUB';

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);

  frag.appendChild(home);
  frag.appendChild(select);
  frag.appendChild(input1);
  frag.appendChild(input2);

  container.innerHTML = '';
  container.appendChild(frag);

  container.style.top = '0px';

  var x = new LG({
    document: document,
    select: select
  });
}(this, 'https://cdn.rawgit.com/lgick/Converter/v1.0/', 'LG_Bookmarklet'));
