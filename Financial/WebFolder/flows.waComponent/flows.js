
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'flows';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var combobox6 = {};	// @combobox
	var combobox7 = {};	// @combobox
	var combobox5 = {};	// @combobox
	var textField9 = {};	// @textField
	var textField8 = {};	// @textField
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

	combobox6.change = function combobox6_change (event)// @startlock
	{// @endlock
		$comp.sources.account1.query("project.ID = :1", $comp.widgets.combobox6.getValue());
	};// @lock

	combobox7.change = function combobox7_change (event)// @startlock
	{// @endlock
		$comp.sources.analyticAccount.query("project.ID = :1 AND typology = :2", $comp.widgets.combobox5.getValue(), $comp.widgets.combobox7.getValue());
		
		//alert("valor cambia");
		
		if ($comp.widgets.combobox7.getValue() == 'input') {
			$comp.sources.account1.query("project.ID = :1", $comp.widgets.combobox5.getValue());
			$comp.widgets.combobox9.hide();
			$comp.widgets.combobox10.show();
			$comp.widgets.combobox6.hide();
			
		} else if ($comp.widgets.combobox7.getValue() == 'output') {
			$comp.sources.account1.query("project.ID = :1", $comp.widgets.combobox5.getValue());
			$comp.widgets.combobox9.show();
			$comp.widgets.combobox10.hide();
			$comp.widgets.combobox6.hide();
			
		} else if ($comp.widgets.combobox7.getValue() == 'transfer') {
			$comp.sources.account1.query("project.ID = :1", $comp.widgets.combobox6.getValue());
			$comp.widgets.combobox9.show();
			$comp.widgets.combobox10.show();
			$comp.widgets.combobox6.show();
		}
	};// @lock

	combobox5.change = function combobox5_change (event)// @startlock
	{// @endlock
		$comp.sources.analyticAccount.query("project.ID = :1 AND typology = :2", $comp.widgets.combobox5.getValue(), $comp.widgets.combobox7.getValue());
		$comp.sources.account.query("project.ID = :1", $comp.widgets.combobox5.getValue());
	};// @lock

	textField9.change = function textField9_change (event)// @startlock
	{// @endlock
		applyFilter();
	};// @lock

	textField8.change = function textField8_change (event)// @startlock
	{// @endlock
		applyFilter();
	};// @lock

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
		debugger;
		var newFlow = $comp.sources.flow.getCurrentElement();
		
		newFlow.analyticAccount.setValue($comp.sources.analyticAccount.getCurrentElement());
		newFlow.typology.setValue($comp.widgets.combobox7.getValue());
		
		
		if ($comp.widgets.combobox7.getValue() == 'input') {
			newFlow.counterpart.setValue($comp.sources.counterpart.getCurrentElement());
			newFlow.toAccount.setValue($comp.sources.account1.getCurrentElement());
			
		} else if ($comp.widgets.combobox7.getValue() == 'output') {
			newFlow.counterpart.setValue($comp.sources.counterpart.getCurrentElement());
			newFlow.fromAccount.setValue($comp.sources.account.getCurrentElement());
			
		} else if ($comp.widgets.combobox7.getValue() == 'transfer') {
			newFlow.fromAccount.setValue($comp.sources.account.getCurrentElement());
			newFlow.toAccount.setValue($comp.sources.account1.getCurrentElement());
			
		}
		
		
		
		$comp.sources.flow.save({onSuccess:function(event){
			$comp.sources.flow.addEntity(newFlow);
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
		$comp.widgets.combobox7.setValue("output");
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$comp.sources.flow.removeCurrent();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_combobox6", "change", combobox6.change, "WAF");
	WAF.addListener(this.id + "_combobox7", "change", combobox7.change, "WAF");
	WAF.addListener(this.id + "_combobox5", "change", combobox5.change, "WAF");
	WAF.addListener(this.id + "_textField9", "change", textField9.change, "WAF");
	WAF.addListener(this.id + "_textField8", "change", textField8.change, "WAF");
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
		
		var flowQuery = "fromAccount.project.ID = " + $comp.widgets.combobox1.getValue();
		flowQuery += " OR toAccount.project.ID = " + $comp.widgets.combobox1.getValue();
		
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
		
		if ($comp.widgets.checkbox8.getValue()) {
			var fecha = waf.widgets.component0_textField8.getValue();
			var res = fecha.split("/");
			flowQuery += " AND valueDate >= '" + res[2] + "-" + res[0] + "-" + res[1] + "'";
		}
		
		if ($comp.widgets.checkbox9.getValue()) {
			var fecha = waf.widgets.component0_textField9.getValue();
			var res = fecha.split("/");
			flowQuery += " AND valueDate <= '" + res[2] + "-" + res[0] + "-" + res[1] + "'";
		}

		//$comp.sources.flow.query(flowQuery);
		
	};


}// @startlock
return constructor;
})();// @endlock
