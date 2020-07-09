(function() {
 let tmpl = document.createElement('template');
 tmpl.innerHTML = `
	<svg>
	<circle cx="25" cy="25" r="25" fill="purple" />
	</svg>
    `;

 customElements.define('com-sap-sample-helloworld1', class HelloWorld1 extends HTMLElement {


  constructor() {
   super();
   this._shadowRoot = this.attachShadow({mode: "open"});
   this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
	  
  let script = document.createElement('script');
	   script.src = 'https://d3js.org/d3.v5.min.js';
	  script.charset='utf-8'
	  script.type='text/javascript'
	  document.head.append(script);
	    	console.log("tag appended...");
	    script.onload = () => {
		    console.log("script loaded...");
	};
	 
  }

  //Fired when the widget is added to the html DOM of the page
  connectedCallback() {
	  this.redraw();
  }
   

  //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
  disconnectedCallback() {

  }

  //When the custom widget is updated, the Custom Widget SDK framework executes this function first
  onCustomWidgetBeforeUpdate(oChangedProperties) {

  }

  //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
  onCustomWidgetAfterUpdate(oChangedProperties) {
   if (this._firstConnection) {
	this.redraw();
   }

  }

  //When the custom widget is removed from the canvas or the analytic application is closed
  onCustomWidgetDestroy() {}


  //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
  // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
  //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
  
  onCustomWidgetResize(width, height){
      console.log(width+"   "+height);
  }
  

  redraw() {
	console.log("redraw...");  
	 d3.select(this._shadowRoot).select("circle").attr("fill","green");
	 console.log("end");
      
  }
 
 });
})();
