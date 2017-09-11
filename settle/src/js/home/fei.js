require(['../require-config'], function() {
    require(["zepto", "error"], function($) {
        $(function() {
            i < 12;

            function test() {
                var a = 1;
                return a + 1;
            }
            test();
            try {
                i < 10
            } catch (e) {
                console.log(e);
            }
        });
    });
});