/**
 * widget.js - high-level interface for blessed
 * Copyright (c) 2013-2015, Christopher Jeffrey and contributors (MIT License).
 * https://github.com/chjj/blessed
 */

var widget = exports;

// Bun.js does not support dynamic imports, statically defined here for Bun support.
widget.Node = widget.node = require('./widgets/node');
widget.Screen = widget.screen = require('./widgets/screen');
widget.Element = widget.element = require('./widgets/element');
widget.Box = widget.box = require('./widgets/box');
widget.Text = widget.text = require('./widgets/text');
widget.Line = widget.line = require('./widgets/line');
widget.ScrollableBox = widget.scrollablebox = require('./widgets/scrollablebox');
widget.ScrollableText = widget.scrollabletext = require('./widgets/scrollabletext');
widget.BigText = widget.bigtext = require('./widgets/bigtext');
widget.List = widget.list = require('./widgets/list');
widget.Form = widget.form = require('./widgets/form');
widget.Input = widget.input = require('./widgets/input');
widget.Textarea = widget.textarea = require('./widgets/textarea');
widget.Textbox = widget.textbox = require('./widgets/textbox');
widget.Button = widget.button = require('./widgets/button');
widget.ProgressBar = widget.progressbar = require('./widgets/progressbar');
widget.FileManager = widget.filemanager = require('./widgets/filemanager');
widget.Checkbox = widget.checkbox = require('./widgets/checkbox');
widget.RadioSet = widget.radioset = require('./widgets/radioset');
widget.RadioButton = widget.radiobutton = require('./widgets/radiobutton');
widget.Prompt = widget.prompt = require('./widgets/prompt');
widget.Question = widget.question = require('./widgets/question');
widget.Message = widget.message = require('./widgets/message');
widget.Loading = widget.loading = require('./widgets/loading');
widget.Listbar = widget.listbar = require('./widgets/listbar');
widget.Log = widget.log = require('./widgets/log');
widget.Table = widget.table = require('./widgets/table');
widget.ListTable = widget.listtable = require('./widgets/listtable');
widget.Terminal = widget.terminal = require('./widgets/terminal');
widget.Image = widget.image = require('./widgets/image');
widget.ANSIImage = widget.ansiimage = require('./widgets/ansiimage');
widget.OverlayImage = widget.overlayimage = require('./widgets/overlayimage');
widget.Video = widget.video = require('./widgets/video');
widget.Layout = widget.layout = require('./widgets/layout');


widget.aliases = {
  'ListBar': 'Listbar',
  'PNG': 'ANSIImage'
};

Object.keys(widget.aliases).forEach(function(key) {
  var name = widget.aliases[key];
  widget[key] = widget[name];
  widget[key.toLowerCase()] = widget[name];
});
