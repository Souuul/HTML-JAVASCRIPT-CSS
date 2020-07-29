function search_image() {
    // enter key를 입력하면,
    if(event.keyCode == 13){
        // alert("검색시작!!")
        // alert($("input[type = text]").val())  // 입력값 받기
        $.ajax({
            async : true, // 동기 or 비동기
            url : "https://dapi.kakao.com/v2/search/image",   // 호출할 서버쪽 url
            data : {
                query : $("#movie_name").val() + " 영화포스터",
                sort : "accuracy"
            },
            //xhr requester 객체

            beforeSend : function(xhr){
                xhr.setRequestHeader("Authorization", "KakaoAK 3268ae21c714175d2b7443985578874d")
            },
            type : "GET",
            timeout : 3000,
            dataType : "JSON",
            success : function (result) {
                var image_list = result.documents
                var li = $('<li></li>')
                var img = $("<img />").attr('src', image_list[0].thumbnail_url).addClass("myImage")
                li.append(img)
                $("ul").append(li)

            },
            error : function () {
                alert("망함....")


            }

        })


    }

}


// REST KEY : 3268ae21c714175d2b7443985578874d
// -H 는 헤더
// curl -X GET -H 'Authorization: KakaoAK ${APP_KEY}' 'https://dapi.kakao.com/v2/search/image?query=%EC%9D%B8%ED%84%B0%EC%8A%A4%ED%85%94%EB%9D%BC&sort=accuracy'
