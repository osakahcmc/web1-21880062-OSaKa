(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['handlebars-details'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <section class=\"container my-5\">\r\n                <h1 class=\"pb-3\">"
    + container.escapeExpression(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h1>\r\n                <div class=\"text-black-50\">"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"description") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n              </section>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"container-fluid\" id=\"banner-small\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":7,"column":23}}})) != null ? stack1 : "")
    + "</section>";
},"useData":true});
templates['handlebars-news'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"col-md-4\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                      <h5>\r\n                        "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"date") : depth0), depth0))
    + "\r\n                      </h5>\r\n                      <div class=\"text-center\">\r\n                        <!-- <a href=\"#\" class=\"text-center\" onclick=\"loadData('news/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "','handlebars-details','content')\">Read more</a> -->\r\n                        <a href=\"?request=news/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"readmore btn btn-link ps-0\">Read more</a>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                      <h3>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h3>\r\n                      <p class=\"text-black-50\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":20,"column":25}}})) != null ? stack1 : "")
    + "              </div>";
},"useData":true});
templates['handlebars-products'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"col-md-3\">\r\n                  <div class=\"card border-0\">\r\n                    <div class=\"card-body text-center\">\r\n                      <img src=\"assets/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imagepath") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" onmouseover=\"rollover(this,'assets/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imagepath") : depth0), depth0))
    + "')\" onmouseout=\"rollover(this,'assets/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imagepath") : depth0), depth0))
    + "',false)\">\r\n                      <h3 class=\"card-title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h3>\r\n                      <p class=\"card-text text-black-50\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</p>\r\n                      <!-- <a href=\"#\" class=\"btn btn-link\" onclick=\"loadData('products/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "','handlebars-details','content')\">Read more</a> -->\r\n                      <a href=\"?request=products/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"readmore btk btn-link pt-0\">Read more</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row content_box\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":14,"column":25}}})) != null ? stack1 : "")
    + "              </div>";
},"useData":true});
})();