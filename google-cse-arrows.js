/** @preserve Google CSE Arrows 1.0 - MIT License */
/*
 * Google CSE Arrows 
 * https://github.com/evilsizord/Google-CSE-Arrows
 * @version   1.0
 * @license   MIT 
 * @date      2015-05-16
 * @author    Daniel Evilsizor
*/

(function() {

    // Only run in supported browsers (most modern browsers do)
    if (!('MutationObserver' in window || 'WebKitMutationObserver' in window)) {
        return false;
    }
    
    var mutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    
    function AttachObserver()
    {
        var target = $('.gsc-control-wrapper-cse');
        
        if (target.length) {
            // Create observer to attach arrows when page changes
            var observer = new mutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    //console.log(mutation.type + ' ' + mutation.attributeName + mutation.target.tagName + ' ' + mutation.target.className);
                    if (mutation.attributeName == 'class' && mutation.target.className.indexOf('loading') < 0) {
                        // When .gsc-control-wrapper-cse has class updated second time (first time it has a 'loading' class added), 
                        // that's our cue to re-attach the arrows
                        AttachArrows();
                    }
                });
            });
            
            // Remove the poll
            clearInterval(poll);
            
            // Start observing
            observer.observe(target[0], {attributes: true} );
        }
    }
    
    // Setup an initial poll to check when the search element is initialized
    var poll = setInterval(AttachObserver, 300);
    

    // Attach next and previous arrows.
    // Runs each time search results page changes
    function AttachArrows()
    {
        // attach / remove arrow buttons
        var $resultsRoot = $('.gsc-resultsRoot');
        
        // If there are 2 results root then we have a multi-tab situation (image and web results)
        // so only use the active tab
        var $cursor = ($resultsRoot.length > 1) ?
                    $('.gsc-tabdActive .gsc-cursor-current-page') :
                    $('.gsc-cursor-current-page');
        
        var page = Number( $cursor.text() );
            
        if (page > 1) {
            $prev_arrow = $('<div tabindex="0" class="gsc-cursor-page gsc-cursor-prev">Previous</div>').on('click', function() {
                $cursor.prev().trigger('click');
            });
            
            $cursor.parent().prepend( $prev_arrow );
        }
        
        if ($cursor.next().length) {
            $next_arrow = $('<div tabindex="0" class="gsc-cursor-page gsc-cursor-next">Next</div>').on('click', function() {
                $cursor.next().trigger('click');
            });
            
            $cursor.parent().append( $next_arrow );
        }
    }

})();
