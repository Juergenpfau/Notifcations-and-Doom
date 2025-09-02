var DoomEventAPI = Class.create();
DoomEventAPI.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  
  queueDoomEvent: function () {
    var u = new GlideRecord('sys_user');
    if (!u.get(gs.getUserID())) {
      return 'Could not load user record.';
    }

    var clickerName = u.getDisplayValue();

    var managerSysId = u.getValue('u_manager') || '';

    if (!managerSysId) {
      return clickerName + ' has no u_manager set.';
    }
    gs.eventQueue('Doom_was_played', u, clickerName, managerSysId);

    return 'Queued DOOM email to manager of ' + clickerName + '.';
  },

  isPublic: function () {
    return true;
  }
});
