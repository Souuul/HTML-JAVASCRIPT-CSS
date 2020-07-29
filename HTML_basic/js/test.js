function call_ajax_test() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출
    // 모든 키에 대해서 처리하는게 아니라 enter key일 경우에만 처리
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
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        data : {
            targetDt : $("input[type = date]").val().replace(/-/gi, ""), key : "eb54a1626c43878c3d0911455778522b"

        },
        type : "GET",
        timeout : 3000,
        dataType : "json",   // 결과 JSON을 JavaScript 객체로 변환.
        success: function (result) {
            $("tbody").empty()
            $.each(result.boxOfficeResult.dailyBoxOfficeList, function (idx, item) {
                var tr = $("<tr></tr>")  // <tr></tr>
                var ranktd = $("<td></td>").text(item.rank)  //<td></td>
                var movieNmtd = $("<td></td>").text(item.movieNm)  //<td></td>
                var salesAcctd = $("<td></td>").text(item.salesAcc)  //<td></td>
                var audiAcctd = $("<td></td>").text(item.audiAcc)  //<td></td>
                var de_button = $("<td></td>")
                var debutton = $("<input />").attr("type", "button").attr("value", "상세정보보")
                var mv_movieCd = item.movieCd
                debutton.on("click", function () {
                    $.ajax({
                        async: true, // 비동기 방식의 호출(default)
                        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
                        data: {
                            movieCd: mv_movieCd, key: "eb54a1626c43878c3d0911455778522b"
                        },
                        type: "GET",
                        timeout: 3000,
                        dataType: "json",   // 결과 JSON을 JavaScript 객체로 변환.
                        success: function (result) {
                            var Movie_detail = result.movieInfoResult.movieInfo
                            // movieCd
                            // movieNm
                            // movieNmEn
                            // movieNmOg
                            // showTm
                            // prdtYear
                            // openDt
                            // prdtStatNm
                            // typeNm
                            // alert(movie_detail.movieCd)
                            alert("영화명 : " + Movie_detail.movieNm + '\n' +
                                "영화번호 : " + Movie_detail.movieCd + '\n' +
                                "쇼타임 : " + Movie_detail.showTm + " 분" + '\n' +
                                "제작년도 " + Movie_detail.prdtYear + " 년")
                        },
                        error: function (error) {
                            alert("서버호출실패")
                        }

                    })

                })

                de_button.append(debutton)


                // tr.append(imgtd)
                tr.append(ranktd)
                tr.append(movieNmtd)
                tr.append(salesAcctd)
                tr.append(audiAcctd)
                tr.append(de_button)

                $("tbody").append(tr)

            })
        },
        error: function (error) {
            alert("서버호출실패")
        }
    })
}