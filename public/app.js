var App = function() {

    this.listeners();
};

App.prototype.listeners = function()
{
    var _this = this;
    $("#search").keyup(function() {
        var val = $(this).val();
        if(val.length == 0)
        {
            $(".no-results").show();
            $(".hidden-card").hide();
        }
        else
        {
            if(val.indexOf('crab') > -1)
            {
                _this.displayFakeList();
            }
            else if(val.indexOf('cat') > -1 || val.indexOf('dog') > -1)
            {
                _this.displayFactList();
            }
            else if(val.indexOf('silver') > -1)
            {
                _this.displayHarmfulList();
            }
            else 
            {
                _this.displayNewEntryCard(val);
            }
        }
    });
};

App.prototype.displayNewEntryCard = function(val) 
{
    $(".new-entry").show();
    $(".user-specified-query").html(val);
};

App.prototype.displayFakeList = function()
{
    $(".no-results").hide();
    $(".fake-results").show();
};

App.prototype.displayFactList = function()
{
    $(".no-results").hide();
    $(".fact-results").show();
};

App.prototype.displayHarmfulList = function()
{
    $(".no-results").hide();
    $(".harmful-results").show();
};