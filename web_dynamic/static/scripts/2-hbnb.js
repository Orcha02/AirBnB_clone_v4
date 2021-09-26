$(document).ready(() => {
  const CheckList = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      const key = $(this).attr('data-id');
      const value = $(this).attr('data-name');
      CheckList[key] = value;
    }
    if (!$(this).is(':checked')) {
      delete CheckList[$(this).attr('data-id')];
    }
    const list = [];
    for (const name in CheckList) {
      list.push(CheckList[name]);
    }
    $('div.amenities h4').text(list.join(', '));
  });
});
$.getJSON('http://0.0.0.0:5001/api/v1/status', content => {
  if (content.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});

