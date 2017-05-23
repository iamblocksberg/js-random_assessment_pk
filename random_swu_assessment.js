
var min_value = 3; // Possible = 1
var max_value = 4; // Possible = 5
var round_cur = 1;
var round_max = 20;
var count = 0;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for ( round_cur = 1; round_cur <= round_max; round_cur++ ) {

	var value_rand = rand( min_value , max_value );
	var allElems = document.getElementsByTagName('input');

	for (i = 0; i < allElems.length; i++) {
 
	    if (allElems[i].type == 'radio' && allElems[i].name == 'radChoice' + round_cur && allElems[i].value == value_rand) {
	        allElems[i].checked = true;
			count++;
	        console.log('radChoice' + round_cur + ' , Value: ' + value_rand );
	    }

	}

}

console.log( 'Checked: ' + count );
