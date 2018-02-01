//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const PageBase = require('sf-core/ui/page');
const Page = extend(PageBase);
const pageContextPatch = require('@smartface/contx/lib/smartface/pageContextPatch');
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const ImageView = extend(require('sf-core/ui/imageview'));
const Label = extend(require('sf-core/ui/label'));

const LayoutHeaderBar = extend(require("../components/LayoutHeaderBar"));
const ListItem1 = extend(require("../components/ListItem1"));
const HorizontalDivider = extend(require("../components/HorizontalDivider"));
const Hierachyfl = extend(require("../components/Hierachyfl"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $PgProfileDetail(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "layoutHeaderBar", $LayoutHeaderBar_, this);
  addChild.call(this, "flexlayout1", $Flexlayout1_, this);
  addChild.call(this, "flexlayout500", $Flexlayout500_, this);
  pageContextPatch(this, "pgProfileDetail");
}
$PgProfileDetail.$$styleContext = {
  classNames: ".page",
  userProps: {},
  statusBar: {
    classNames: "",
    userProps: {
      visible: true
    }
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {
      visible: false
    }
  }
};
const $PgProfileDetail_ = Page($PgProfileDetail);

function $LayoutHeaderBar(_super, pageInstance) {
  _super(this);
  pageInstance.layoutHeaderBar = this;
}
$LayoutHeaderBar.$$styleContext = {
  classNames: ".flexLayout .flexLayout-headerBar",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 92,
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $LayoutHeaderBar_ = LayoutHeaderBar($LayoutHeaderBar);

function $Flexlayout1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "imageview111", $Flexlayout1$$Imageview111_, pageInstance);
  addChild.call(this, "label827", $Flexlayout1$$Label827_, pageInstance);
  addChild.call(this, "label827_1", $Flexlayout1$$Label827_1_, pageInstance);
}
$Flexlayout1.$$styleContext = {
  classNames: ".flexLayout .flexLayout-headerBar",
  userProps: {
    width: null,
    height: 170,
    flexProps: {
      alignItems: "CENTER",
      justifyContent: "CENTER"
    }
  }
};
const $Flexlayout1_ = FlexLayout($Flexlayout1);

function $Flexlayout1$$Imageview111(_super, pageInstance) {
  _super(this);
}
$Flexlayout1$$Imageview111.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    height: 85,
    width: 85,
    imageFillType: "ASPECTFIT",
    image: "myavatar.png",
    marginBottom: 5
  }
};
const $Flexlayout1$$Imageview111_ = ImageView($Flexlayout1$$Imageview111);

function $Flexlayout1$$Label827(_super, pageInstance) {
  _super(this, {
    text: "Anthony Bell"
  });
}
$Flexlayout1$$Label827.$$styleContext = {
  classNames: ".label .label-overview-title",
  userProps: {
    width: 200,
    height: 25,
    font: {
      bold: false,
      size: 18
    }
  }
};
const $Flexlayout1$$Label827_ = Label($Flexlayout1$$Label827);

function $Flexlayout1$$Label827_1(_super, pageInstance) {
  _super(this, {
    text: "Director of Sales & Marketing"
  });
}
$Flexlayout1$$Label827_1.$$styleContext = {
  classNames: ".label .label-overview-title",
  userProps: {
    width: 200,
    height: 25,
    font: {
      size: 14
    }
  }
};
const $Flexlayout1$$Label827_1_ = Label($Flexlayout1$$Label827_1);

function $Flexlayout500(_super, pageInstance) {
  _super(this);
  addChild.call(this, "qualificationcontainer", $Flexlayout500$$Qualificationcontainer_, pageInstance);
  addChild.call(this, "hierarchyfl", $Flexlayout500$$Hierarchyfl_, pageInstance);
  pageInstance.flexlayout500 = this;
}
$Flexlayout500.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 610,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: null
    }
  }
};
const $Flexlayout500_ = FlexLayout($Flexlayout500);

function $Flexlayout500$$Qualificationcontainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "informationTitle", $Flexlayout500$$Qualificationcontainer$$InformationTitle_, pageInstance);
  addChild.call(this, "company", $Flexlayout500$$Qualificationcontainer$$Company_, pageInstance);
  addChild.call(this, "horizontalDivider", $Flexlayout500$$Qualificationcontainer$$HorizontalDivider_, pageInstance);
  addChild.call(this, "email", $Flexlayout500$$Qualificationcontainer$$Email_, pageInstance);
  addChild.call(this, "horizontaldivider_1", $Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1_, pageInstance);
  addChild.call(this, "workPhone", $Flexlayout500$$Qualificationcontainer$$WorkPhone_, pageInstance);
  addChild.call(this, "horizontaldivider_1_1", $Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1_1_, pageInstance);
  addChild.call(this, "mobilePhone", $Flexlayout500$$Qualificationcontainer$$MobilePhone_, pageInstance);
}
$Flexlayout500$$Qualificationcontainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    left: null,
    right: null,
    top: null,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    height: 220
  }
};
const $Flexlayout500$$Qualificationcontainer_ = FlexLayout($Flexlayout500$$Qualificationcontainer);

function $Flexlayout500$$Qualificationcontainer$$InformationTitle(_super, pageInstance) {
  _super(this, {
    text: "INFORMATION"
  });
  pageInstance.informationTitle = this;
}
$Flexlayout500$$Qualificationcontainer$$InformationTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    height: 25,
    width: null,
    font: {
      size: 16
    }
  }
};
const $Flexlayout500$$Qualificationcontainer$$InformationTitle_ = Label($Flexlayout500$$Qualificationcontainer$$InformationTitle);

function $Flexlayout500$$Qualificationcontainer$$Company(_super, pageInstance) {
  _super(this);
  pageInstance.company = this;
}
$Flexlayout500$$Qualificationcontainer$$Company.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 35,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    }
  }
};
const $Flexlayout500$$Qualificationcontainer$$Company_ = ListItem1($Flexlayout500$$Qualificationcontainer$$Company);

function $Flexlayout500$$Qualificationcontainer$$HorizontalDivider(_super, pageInstance) {
  _super(this);
}
$Flexlayout500$$Qualificationcontainer$$HorizontalDivider.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 1,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    alpha: 1,
    paddingBottom: null,
    marginBottom: 5,
    marginTop: 5,
    flexProps: {
      flexGrow: null,
      positionType: "RELATIVE"
    }
  }
};
const $Flexlayout500$$Qualificationcontainer$$HorizontalDivider_ = HorizontalDivider($Flexlayout500$$Qualificationcontainer$$HorizontalDivider);

function $Flexlayout500$$Qualificationcontainer$$Email(_super, pageInstance) {
  _super(this);
  pageInstance.email = this;
}
$Flexlayout500$$Qualificationcontainer$$Email.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 35,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    marginTop: null,
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    }
  }
};
const $Flexlayout500$$Qualificationcontainer$$Email_ = ListItem1($Flexlayout500$$Qualificationcontainer$$Email);

function $Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1(_super, pageInstance) {
  _super(this);
}
$Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 1,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    alpha: 1,
    marginTop: 5,
    marginBottom: 5,
    flexProps: {
      flexGrow: null,
      positionType: "RELATIVE"
    }
  }
};
const $Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1_ = HorizontalDivider($Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1);

function $Flexlayout500$$Qualificationcontainer$$WorkPhone(_super, pageInstance) {
  _super(this);
  pageInstance.workPhone = this;
}
$Flexlayout500$$Qualificationcontainer$$WorkPhone.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 35,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    marginTop: null,
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    }
  }
};
const $Flexlayout500$$Qualificationcontainer$$WorkPhone_ = ListItem1($Flexlayout500$$Qualificationcontainer$$WorkPhone);

function $Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1_1(_super, pageInstance) {
  _super(this);
}
$Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 1,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    alpha: 1,
    marginTop: 5,
    marginBottom: 5,
    flexProps: {
      flexGrow: null,
      positionType: "RELATIVE"
    }
  }
};
const $Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1_1_ = HorizontalDivider($Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1_1);

function $Flexlayout500$$Qualificationcontainer$$MobilePhone(_super, pageInstance) {
  _super(this);
  pageInstance.mobilePhone = this;
}
$Flexlayout500$$Qualificationcontainer$$MobilePhone.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 35,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    marginTop: null,
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    }
  }
};
const $Flexlayout500$$Qualificationcontainer$$MobilePhone_ = ListItem1($Flexlayout500$$Qualificationcontainer$$MobilePhone);

function $Flexlayout500$$Hierarchyfl(_super, pageInstance) {
  _super(this);
  pageInstance.hierarchyfl = this;
}
$Flexlayout500$$Hierarchyfl.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    width: null,
    height: 345,
    right: 0,
    top: 0,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $Flexlayout500$$Hierarchyfl_ = Hierachyfl($Flexlayout500$$Hierarchyfl);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props

}

module && (module.exports = $PgProfileDetail_);