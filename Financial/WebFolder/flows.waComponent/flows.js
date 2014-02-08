
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'flows';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var combobox12 = {};	// @combobox
	var combobox4 = {};	// @combobox
	var checkbox8 = {};	// @checkbox
	var checkbox9 = {};	// @checkbox
	var checkbox7 = {};	// @checkbox
	var checkbox5 = {};	// @checkbox
	var checkbox6 = {};	// @checkbox
	var combobox1 = {};	// @combobox
	var button8 = {};	// @button
	var button6 = {};	// @button
	var button1 = {};	// @button
	var button3 = {};	// @button
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	combobox12.change = function combobox12_change (event)// @startlock
	{// @endlock
		applyFilter();
	};// @lock

	combobox4.change = function combobox4_change (event)// @startlock
	{// @endlock
		applyFilter();
	};// @lock

	checkbox8.change = function checkbox8_change (event)// @startlock
	{// @endlock
		if($comp.widgets.checkbox8.getValue()){
			$comp.widgets.textField8.enable();	
		} else {
			$comp.widgets.textField8.disable();
		}
		applyFilter();
	};// @lock

	checkbox9.change = function checkbox9_change (event)// @startlock
	{// @endlock
		if($comp.widgets.checkbox9.getValue()){
			$comp.widgets.textField9.enable();	
		} else {
			$comp.widgets.textField9.disable();
		}
		applyFilter();
	};// @lock

	checkbox7.change = function checkbox7_change (event)// @startlock
	{// @endlock
		if($comp.widgets.checkbox7.getValue()){
			$comp.widgets.combobox12.enable();	
		} else {
			$comp.widgets.combobox12.disable();
		}
		applyFilter();
	};// @lock

	checkbox5.change = function checkbox5_change (event)// @startlock
	{// @endlock
		if($comp.widgets.checkbox5.getValue()){
			$comp.widgets.combobox3.enable();	
		} else {
			$comp.widgets.combobox3.disable();
		}
		applyFilter();
	};// @lock

	checkbox6.change = function checkbox6_change (event)// @startlock
	{// @endlock
		if($comp.widgets.checkbox6.getValue()){
			$comp.widgets.combobox2.enable();	
		} else {
			$comp.widgets.combobox2.disable();
		}
		applyFilter();
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		$comp.sources.analyticAccount.query("project.ID = :1", $comp.widgets.combobox1.getValue());
		$comp.sources.account.query("project.ID = :1", $comp.widgets.combobox1.getValue());
		$comp.widgets.combobox2.disable();
		$comp.widgets.combobox3.disable();
		$comp.widgets.combobox12.disable();
		$comp.widgets.textField8.disable();
		$comp.widgets.textField9.disable();
		$comp.widgets.checkbox5.setValue(false);
		$comp.widgets.checkbox6.setValue(false);
		$comp.widgets.checkbox7.setValue(false);
		$comp.widgets.checkbox8.setValue(false);
		$comp.widgets.checkbox9.setValue(false);
		applyFilter();
		/*
		*/
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		$comp.sources.flow.save({onSuccess:function(event){
			$comp.sources.flow.addEntity($comp.sources.flow.getCurrentElement());
		    //$comp.sources.flow.orderBy('creationDate desc');
		}});
		$comp.widgets.newFlowContainer.hide();
		$comp.widgets.filterContainer.show();
		$comp.widgets.flowsGrid.show();
		$comp.widgets.displayFlowContainer.show();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$comp.sources.flow.removeCurrent();
		$comp.widgets.newFlowContainer.hide();
		$comp.widgets.filterContainer.show();
		$comp.widgets.flowsGrid.show();
		$comp.widgets.displayFlowContainer.show();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$comp.sources.flow.save();
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$comp.sources.flow.newEntity();		
		$comp.widgets.filterContainer.hide();
		$comp.widgets.flowsGrid.hide();
		$comp.widgets.displayFlowContainer.hide();
		$comp.widgets.newFlowContainer.show();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$comp.sources.flow.removeCurrent();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_combobox12", "change", combobox12.change, "WAF");
	WAF.addListener(this.id + "_combobox4", "change", combobox4.change, "WAF");
	WAF.addListener(this.id + "_checkbox8", "change", checkbox8.change, "WAF");
	WAF.addListener(this.id + "_checkbox9", "change", checkbox9.change, "WAF");
	WAF.addListener(this.id + "_checkbox7", "change", checkbox7.change, "WAF");
	WAF.addListener(this.id + "_checkbox5", "change", checkbox5.change, "WAF");
	WAF.addListener(this.id + "_checkbox6", "change", checkbox6.change, "WAF");
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	WAF.addListener(this.id + "_button8", "click", button8.click, "WAF");
	WAF.addListener(this.id + "_button6", "click", button6.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock
	
	function applyFilter() 
	{
		//debugger;
		
		var flowQuery = "project.ID = " + $comp.widgets.combobox1.getValue();
		
		if ($comp.widgets.combobox4.getValue() != "all") {
			
			if ($comp.widgets.combobox4.getValue() == "pending") {
				flowQuery += " AND approved = false OR approved = null";
			} else if ($comp.widgets.combobox4.getValue() == "approved") {
				flowQuery += " AND approved = true";
			}
		}
		
		if ($comp.widgets.checkbox7.getValue()) {
			flowQuery += " AND typology = '" + $comp.widgets.combobox12.getValue() + "'";
		}
		
		
		alert(flowQuery);
		
		
		/*
		$comp.sources.flow.query(
			"project.ID = :1 AND valueDate < :2 AND valueDate > :3 AND typology = :4", 
			$comp.widgets.combobox1.getValue(),
		);
		*/
	};


}// @startlock
return constructor;
})();// @endlock
