(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['blogs-categories-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li><a href=\"#blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":47},"end":{"line":5,"column":53}}}) : helper)))
    + "\" class=\"text-black-50 text-decoration-none\" onclick=\"loadBlogs('blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":135},"end":{"line":5,"column":141}}}) : helper)))
    + "')\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":145},"end":{"line":5,"column":153}}}) : helper)))
    + "</a></li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Categories</h1>\r\n              <ul class=\"py-3\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":16},"end":{"line":6,"column":25}}})) != null ? stack1 : "")
    + "              </ul>";
},"useData":true});
templates['blogs-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"clearfix py-3\">\r\n                  <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":30}}}) : helper)))
    + "</h3>\r\n                  <p class=\"text-black-50\">by "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":5,"column":46},"end":{"line":5,"column":56}}}) : helper)))
    + " in <a  href=\"#\"  onclick=\"loadBlogs('blogs/categories/"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "')\"> "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a> on "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":5,"column":156},"end":{"line":5,"column":164}}}) : helper)))
    + ". <a  href=\"#\" onclick=\"loadBlogDetails('"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":205},"end":{"line":5,"column":211}}}) : helper)))
    + "',true)\">Comments "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + "</a></p>\r\n                  <img src=\"assets/"
    + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":6,"column":35},"end":{"line":6,"column":48}}}) : helper)))
    + "\" alt=\"blog-1\" class=\"float-start me-3 border rounded-4\">\r\n                  <p class=\"text-black-50\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":7,"column":43},"end":{"line":7,"column":56}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n                  <a href=\"#blogs/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":34},"end":{"line":9,"column":40}}}) : helper)))
    + "\" class=\"btn btn-link readmore ps-0\" onclick=\"loadBlogDetails('"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":103},"end":{"line":9,"column":109}}}) : helper)))
    + "')\">Read more</a>\r\n                </div>\r\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <nav aria-label=\"Page navigation\">\r\n                  <ul class=\"pagination\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":20},"end":{"line":24,"column":29}}})) != null ? stack1 : "")
    + "                  </ul>\r\n                </nav>\r\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":20,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":23,"column":31}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li class=\"page-item disabled\">\r\n                      <a class=\"page-link\" href=\"#\" onclick=\"loadBlogs('"
    + alias1(container.lambda((depths[2] != null ? lookupProperty(depths[2],"request") : depths[2]), depth0))
    + "','"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":18,"column":92},"end":{"line":18,"column":100}}}) : helper)))
    + "')\">"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":18,"column":104},"end":{"line":18,"column":112}}}) : helper)))
    + "</a>\r\n                    </li>\r\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\" onclick=\"loadBlogs('"
    + alias1(container.lambda((depths[2] != null ? lookupProperty(depths[2],"request") : depths[2]), depth0))
    + "','"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":22,"column":112},"end":{"line":22,"column":120}}}) : helper)))
    + "')\">"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":22,"column":124},"end":{"line":22,"column":132}}}) : helper)))
    + "</a></li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Blogs</h1>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":11,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"pagination").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),(depth0 != null ? lookupProperty(depth0,"pageCount") : depth0),{"name":"pagination","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":27,"column":31}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['details-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"clearfix py-3\">\r\n                <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":20},"end":{"line":4,"column":28}}}) : helper)))
    + "</h3>\r\n                <p class=\"text-black-50\">by "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":5,"column":44},"end":{"line":5,"column":54}}}) : helper)))
    + " in "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + " on "
    + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":5,"column":79},"end":{"line":5,"column":98}}}))
    + ". <a href=\"#comments\">Comments "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + "</a></p>\r\n                <img src=\"assets/"
    + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":6,"column":33},"end":{"line":6,"column":46}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":53},"end":{"line":6,"column":61}}}) : helper)))
    + "\" class=\"float-start me-3 border rounded-4\">\r\n                <p class=\"text-black-50\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":41},"end":{"line":7,"column":58}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n              </div>\r\n              <div class=\"py-3\" id=\"leave-comments\">\r\n                <h3>Leave your comments</h3>\r\n                <form action=\"#\" method=\"post\" class=\"text-black-50\" onsubmit=\"addComment(event)\">\r\n                  <input type=\"hidden\" id=\"blogId\" name=\"blogId\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":12,"column":72},"end":{"line":12,"column":78}}}) : helper)))
    + "\">\r\n                  <div class=\"text-center\">\r\n                    <div class=\"text-success\" id=\"responseMessage\"></div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                      <div class=\"mb-3\">\r\n                        <label for=\"name\" class=\"form-label\">Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"   >\r\n                        <label for=\"email\" class=\"form-label\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\"   >\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <div class=\"mb-3\">\r\n                      <textarea class=\"form-control\" id=\"message\" name=\"message\" rows=\"3\" placeholder=\"Enter your message\" required></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <div class=\"mb-3\">\r\n                      <textarea class=\"form-control\" id=\"comment\" name=\"comment\" rows=\"3\" placeholder=\"Enter your comment\" required></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <div class=\"form-check form-check-inline\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" id=\"agree\" value=\"1\" required>\r\n                        <label class=\"form-check-label\" for=\"agree\">Agree to terms and conditions</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col text-end\">\r\n                      <button type=\"submit\" class=\"btn btn-link py-0 my-0\">Submit Comment</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n\r\n              <a href=\"#comments\"></a>\r\n              <div class=\"bg-dark text-white py-2\">\r\n                COMMENTS "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + "\r\n              </div>\r\n\r\n              <div class=\"py-3 text-black-50\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"comments") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":16},"end":{"line":62,"column":25}}})) != null ? stack1 : "")
    + "              </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <div>\r\n                    <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":58,"column":23},"end":{"line":58,"column":31}}}) : helper)))
    + " - "
    + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":58,"column":34},"end":{"line":58,"column":53}}}))
    + "</p>\r\n                    <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":59,"column":23},"end":{"line":59,"column":34}}}) : helper)))
    + "</p>\r\n                    <hr>\r\n                  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Blogs</h1>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":64,"column":23}}})) != null ? stack1 : "");
},"useData":true});
})();