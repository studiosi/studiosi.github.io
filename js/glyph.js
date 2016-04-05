function renderGlyph() {
    
    var s = $('#codepoint').val();
    
    $('#error').html("");
    
    if(!s.startsWith('&#x')) {
        
        s = '&#x' + s;
        
    }
    
    if(!s.endsWith(';')) {
        
        s += ';';
        
    }
    
    if(!validate(s)) {
        
        $('#error').html("Invalid Codepoint");
        $('#glyph').html("&#xFFFD;"); 
        
    }
    else {
     
        $('#glyph').html(s);        
        
    }
    
}

function validate(s) {   
    
    var x = s.substring(3, s.length - 1);
    
    if(x.length != 4) return false;
    
    var i = parseInt(x, 16);    
    
    if(i < 0x0000) return false;
    if(i > 0xFFFF) return false;    
    
    return true;
    
}