window.AirTaxi ?= {}
window.AirTaxi.ViewHelpers ?= {}

window.AirTaxi.ViewHelpers.BindModel = (template_id,model) ->
	template_source = $("##{template_id}").html()
	template = Handlebars.compile(template_source)

	template(model.attributes)

window.AirTaxi.ViewHelpers.BindCollection = (template_id,collection) ->
	template_source = $("##{template_id}").html()
	template = Handlebars.compile(template_source)

	models_attributes = collection.map (model) -> model.attributes 
	template({ models: models_attributes })