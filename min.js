var i = 0,
    c = 0,
    newed = "";
$("document").ready(function() {
    $("#add").click(function() {
        i++;
        console.log(i)
        var x = $("#inp");
        var y = $("#Incomplete");
        var z = `<input type='checkbox' class='check' id='chk${i}'>`


        var y2 = `<input type="text" style="width: 15%;" id="inp${i}"><input type="button" value="Edit" class="edit" id="edt${i}"><input type="button" value="Delete" class="del" id="del${i}">`
        var y1 = y.html() + `<li id=lis${i}>` + z + `<span id="sp${i}">` + x.val() + "</span>" + y2 + "</li>";
        // console.log(y1)
        y.html(y1);
        x.val("");
        $(".edit").click(function() {
            // c++;
            // console.log(c)
            var ed = this.id
            var e11 = ed[ed.length - 1];
            // console.log(`#edt${e11}`)
            var e12 = `#sp${e11}`
            if (newed == ed) {
                $(e12).html($(`#inp${e11}`).val())
            }
            $(`#inp${e11}`).val($(e12).html())
            console.log(e12)
            newed = ed
        })
        $(".del").click(function() {
            // $("#Incomplete").remove(li);
            console.log(this.id);
            var f = this.id
            var f11 = f[f.length - 1];
            $(`#lis${f11}`).remove();

        })
        $(".check").click(function() {
            var ch_id = this.id
            var j = ch_id[ch_id.length - 1];

            var ct = $(`#chk${j}`)
            console.log(ct.checked);
            console.log(ct)
            if (ct.is(':checked')) {
                console.log("fv")
                var app_list = $(`#lis${j}`)
                app_list.appendTo('#Completed');

            } else {
                var incomp = $("#Incomplete");
                var lis_upd = $(`#lis${j}`)
                var y12 = incomp.html() + `<li id="#lis${j}">` + lis_upd.html + `</li>`
                incomp.html = y12;
                $(`#Completed #lis${j}`).appendTo('#Incomplete');
            }
        })

    });

});
