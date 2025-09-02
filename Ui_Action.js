function launchDoom() {
  var gm = new GlideModal('doom_modal');
  gm.setTitle('DOOM in ServiceNow');
  gm.render();
  var ga = new GlideAjax('DoomEventAPI');
  ga.addParam('sysparm_name', 'queueDoomEvent');
  ga.getXMLAnswer(function (msg) {
    g_form.addInfoMessage(msg || 'DOOM event queued.');
  });
}

