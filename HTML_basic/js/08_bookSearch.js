function call_ajax() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출
    // 모든 키에 대해서 처리하는게 아니라 enter key일 경우에만 처리
    if( event.keyCode == 13) {
        // alert("엔터가 입력되었습니다.")
        // AJAX call을 이용해서 데이터를 받아오는 코드가 나오면 되요!!
        // 만약 입력된 key가 enter key이면 이 부분을 수행하게 되요!
        // 서버쪽 프로그램을 호출해서 결과를 받아와요!
        // jQuery를 이용해서 AJAX처리 해 보아요!!
        // ajax의 인자로 javacript 객체를 넣어줘요!
        // javascript 객체는 > {ket : value, key : value, ...}     // python에서는 dict의 형태
        // data : 서버프로그램에게 넘겨줄 데이터들..
        $.ajax({
            async : true, // 비동기 방식의 호출(default)
            url : "http://192.168.0.200:8080/bookSearch/search",
            data : {
                keyword : $("input[type = text]").val()
            },
            type : "GET",
            timeout : 3000,
            dataType : "json",   // 결과 JSON을 JavaScript 객체로 변환.
            success : function (result){
                $("tbody").empty()
                $.each(result, function (idx, item) {
                    var tr = $("<tr></tr>")  // <tr></tr>
                    var imgtd = $("<td></td>")  //<td></td>
                    var img = $("<img />").attr("src", item.img)
                    imgtd.append(img)
                    var titletd = $("<td></td>").text(item.title)  //<td></td>
                    var authortd = $("<td></td>").text(item.author)  //<td></td>
                    var pricetd = $("<td></td>").text(item.price)  //<td></td>


                    tr.append(imgtd)
                    tr.append(titletd)
                    tr.append(authortd)
                    tr.append(pricetd)

                    $("tbody").append(tr)

                    })

                // for(i=0; i<result.length; i++){
                //     var tr = $("<tr></tr>")  // <tr></tr>
                //
                //     var imgtd = $("<td></td>")  //<td></td>
                //
                //     var img = $("<img />").attr("src", result[i].img)
                //     imgtd.append(img)
                //     var titletd = $("<td></td>").text(result[i].title)  //<td></td>
                //     var authortd = $("<td></td>").text(result[i].author)  //<td></td>
                //     var pricetd = $("<td></td>").text(result[i].price)  //<td></td>
                //     var deltd = $("<td></td>")
                //     var delBtn = $("<input />").attr("type", "button").attr("value", "삭제")
                //     delBtn.on("click", function () {
                //         $(this).parent().parent().remove()
                //     })
                //
                //     deltd.append(delBtn)
                //
                //
                //     tr.append(imgtd)
                //     tr.append(titletd)
                //     tr.append(authortd)
                //     tr.append(pricetd)
                //     tr.append(deltd)
                //
                //     $("tbody").append(tr)
                //
                // }

                // alert(result[0].title) // 제목
                /*
                    <tr>
                        <td><img src = ...></td>
                        <td>제목</td>
                        <td>저자</td>
                        <td>가격</td>
                        <td>버튼</td>
                    </tr>
                 */

                // var tr = $("<tr></tr>")  // <tr></tr>
                //
                // var imgtd = $("<td></td>")  //<td></td>
                //
                // var img = $("<img />").attr("src", result[0].img)
                // imgtd.append(img)
                // var titletd = $("<td></td>").text(result[0].title)  //<td></td>
                // var authortd = $("<td></td>").text(result[0].author)  //<td></td>
                // var pricetd = $("<td></td>").text(result[0].price)  //<td></td>
                //
                //
                // tr.append(imgtd)
                // tr.append(titletd)
                // tr.append(authortd)
                // tr.append(pricetd)
                //
                // $("tbody").append(tr)

            },
            error : function (error) {
                alert("서버호출실패")
            }
        })
    }


}

    //
    //
    //
    // $.each(result, function (idx, item) {
    //     var tr = $("<tr></tr>")  // <tr></tr>
    //
    //     var imgtd = $("<td></td>")  //<td></td>
    //
    //     var img = $("<img />").attr("src", item.img)
    //     imgtd.append(img)
    //     var titletd = $("<td></td>").text(item.title)  //<td></td>
    //     var authortd = $("<td></td>").text(item.author)  //<td></td>
    //     var pricetd = $("<td></td>").text(item.price)  //<td></td>
    //
    //
    //     tr.append(imgtd)
    //     tr.append(titletd)
    //     tr.append(authortd)
    //     tr.append(pricetd)
    //
    //     $("tbody").append(tr)
    //
    //     }
