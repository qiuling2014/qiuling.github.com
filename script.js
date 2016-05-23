var gmu;
gmu = (function(utils){
  utils.dialog = function(option){
    var default_option = {
      width: '80%',
      title: 'dialog',
      content: '',
      beforeOpen: function(){

      },
      afterClose: function(){

      },
      html:'<div class="dialog-wrap"><div class="mask"></div><div class="dialog-content"><button class="close">X</button></div></div>'
    };
    var self = {};
    self = {
      elem: null,
      _init: function(option){
        var opts = $.extend(default_option, option);
        var dialog_wrap = $(opts.html);
        var dialog_content = dialog_wrap.find('.dialog-content');
        dialog_content.append(opts.content);

        dialog_content[0].style.width = opts.width;
        dialog_wrap.hide();
        $('body').append(dialog_wrap);
        this.elem = dialog_wrap;
        this._handleCloseClick();
        return this;
      },
      open: function(){
        this.elem.show();
      },
      close: function(){
        this.elem.hide();
      },
      _handleCloseClick: function(){
        var t = this;
        t.elem.find('.close').on('click', function(){
          t.close();
        });
      }
    };
    return self._init(option);
  };
  utils.tabs = function(){

  };
  return utils;
})(gmu || {} );
