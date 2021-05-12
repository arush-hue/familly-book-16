var members=["Karan Sharma-Father","Anisha Sharma-Mother","Arush Sharma-Me","Vijay Kumar Anand-Maternal Grandfather","Sharda Anand-Maternal Grandmother","Anjali Batra-Aunt","Umesh Batra-Uncle","Yashica Batra-Sister","Ronak Batra-Brother"];
var images=["Karan copy.png","Anisha copy.jpeg","Arush.jpeg","MG copy 2.png","MG copy 3.png","Masi.png","Massarji.jpg","didi.jpg","Ronak.png"]
var i=0;
function nextMember()
{
    document.getElementById("firstH5").innerHTML=members[i];
    document.getElementById("firstImage").src=images[i];
    i++;
    if(i>8)
    {
        i=0;
    }
}