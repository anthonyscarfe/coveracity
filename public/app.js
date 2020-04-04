var App = function() {

    this.createList();
    this.listeners();
};

App.prototype.listeners = function()
{
    $("#search").keyup(function() {
        var val = $(this).val();
        
        $.get( "router.php", { q: val } )
        .done(function( data ) {
            console.log(data);
        });
        
    });
};

App.prototype.createList = function()
{
    var json = '{"claims":[{"text":"5G WiFi networks could be responsible for the rapid spread of the new coronavirus.","claimant":"Daily Star","claimDate":"2020-03-27T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/health/5G-not-accelerating-coronavirus/","reviewDate":"2020-03-31T00:00:00Z","textualRating":"This is not true. There is no evidence that 5G WiFi networks are linked to the new coronavirus.","languageCode":"en"}]},{"text":"Cleveland Clinic developed a Covid-19 test that gives results in hours, not days.","claimant":"Facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"This is incorrect. The clinic announced that it is able to speed up Covid-19 testing after developing the ability to test on-site, but it had not developed a new test.","languageCode":"en"}]},{"text":"All seven patients who were getting treated for Covid-19 at Safdarjung hospital in New Delhi have recovered.","claimant":"facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"There is a news story reporting that seven patients in this hospital in New Delhi had recovered. However, these were not the only Covid-19 patients in the city.","languageCode":"en"}]},{"text":"Plasma from newly recovered patients from Covid -19 can treat others infected by Covid-19.","claimant":"Facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"This is being used as a treatment in some countries, but clinical trials have not yet proved that this is effective.","languageCode":"en"}]},{"text":"China has closed down its last coronavirus hospital. Not enough new cases to support them.","claimant":"Facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"This is correct. The last hospitals closed at the start of March 2020.","languageCode":"en"}]},{"text":"A 103 year-old Chinese grandmother has made a full recovery from Covid-19 after being treated for 6 days in Wuhan, China","claimant":"Facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"This has been widely reported in the media.","languageCode":"en"}]},{"text":"A San Diego biotech company is developing a Covid-19 vaccine in collaboration with Duke University and National University of Singapore.","claimant":"facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"This is correct. The company, Arcturus Therapeutics, announced on 4 March 2020 that it would be working on a vaccine with DukeNUS Medical School in Singapore.","languageCode":"en"}]},{"text":"The number of new cases in South Korea is declining.","claimant":"facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"This was correct when the viral post began to appear. Reported new cases declined from their peak in late February, and have been roughly level since mid-March","languageCode":"en"}]},{"text":"Scientists in Israel are likely to announce the development of a coronavirus vaccine.","claimant":"facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"Scientists in Israel and elsewhere are working on developing a vaccination to prevent the spread of the new coronavirus, but it won’t be ready for the public for over a year.","languageCode":"en"}]},{"text":"Doctors in India have been successful in treating coronavirus with a combination of drugs (Lopinavir, Retonovir, Oseltamivir along with Chlorphenamine) and are going to suggest the same medicine globally.","claimant":"Facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"India’s ministry of health has advised that the anti-HIV drugs, Lopinavir and Retonovir, are used in some groups of Covid-19 patients. But it is unclear how successful this treatment has been. The other two drugs from the claim are not mentioned in their guidance.","languageCode":"en"}]},{"text":"Three Maryland coronavirus patients fully recovered and are able to return to everyday life.","claimant":"facebook user","claimDate":"2020-03-17T00:00:00Z","claimReview":[{"publisher":{"name":"Full Fact","site":"fullfact.org"},"url":"https://fullfact.org/online/good-news-coronavirus/","reviewDate":"2020-03-30T00:00:00Z","textualRating":"Correct. On 13 March 2020, Montgomery County, Maryland confirmed that three residents who previously had the virus no longer tested positive.","languageCode":"en"}]}]}';
    
    var data = JSON.parse(json);

    var items = [];
    $.each( data.claims, function( key, val ) {
        items.push( "<li id=''>" + val.text + "<br>"+ val.claimReview[0].textualRating +"</li>" );
    });

    $( "<ul />", {
        "class": "collection with-header",
        html: items.join( "" )
    }).appendTo( ".results-container" );
   
}