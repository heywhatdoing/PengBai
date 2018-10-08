var VdisplayValue = "none";
var VButtontext = "Open Valve logo";
function VSwitch() {
    if (VdisplayValue == "none") {
        VdisplayValue = "block";
        VButtontext = "Close Valve logo" ;
    } else {
        VdisplayValue = "none";
        VButtontext = "Open Valve logo";
    }
    document.getElementById('imageValve').style.display = VdisplayValue;
    document.getElementById('VButton').innerText = VButtontext;
}
var SdisplayValue = "none";
var SButtontext = "Open Steam logo";

function SSwitch() {
    if (SdisplayValue == "none") {
        SdisplayValue = "block";
        SButtontext = "Close Steam logo";
    } else {
        SdisplayValue = "none";
        SButtontext = "Open Steam logo";
    }
    document.getElementById('imageSteam').style.display = SdisplayValue;
    document.getElementById('SButton').innerText = SButtontext;
}
