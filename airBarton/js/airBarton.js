$(function(){ 
    airHover(".banner-leftimg",".banner-leftheader");
    airHover(".suspension-one",".suspension-oneright");
    airHover(".suspension-two",".suspension-tworight");
    help();
    about();
    notice();
})
// hover函数
    function airHover(val,div){
        $(val).hover(function (){  
            $(div).slideToggle();  
        },function (){  
            $(div).slideToggle();  
        }); 
    }
// 模板数据
var pageTemplate={
    help:{
        lione:'<h1 style="text-align: center;">班线车接送规则</h1><h2>一、班线车定义</h2><h3>1、接送班线车分为机场班线车和乡镇班线车两种：</h3><p>机场班线车是常州市区往返周边机场、码头的直达专线接送车。</p><p>乡镇班线车是常州市区往返周边乡镇的短驳接送车。</p><p>乘客都是通过在空巴通平台上进行下单，下单后有专业的、有营运资质的汽车公司来完成接送任务。</p><h3>2、机场班线车预定办法：</h3><p>机场班线车是从常州市区到周边机场码头的直达专线接送车，如果要从周边乡镇到机场码头，可以先在乡镇班线车内下单，然后再根据预计的时间从机场班线车内下单，乡镇到机场码头接送是分两段在同一地点实现无缝换车的。比如：从新北区奔牛镇到上海虹桥机场，第一段是从奔牛镇乘坐乡镇班线车到常州市区换乘点，第二段再从同一地点换乘机场班线车前往上海虹桥机场。乘坐机场班线车可选择沿线就近站点上下车。比如，横山桥高速道口上车点，横山桥周边的客人可在下单时选择这个道口上下车，无需赶到市内乘坐，方便快捷。</p><h2>二、双方共同条款</h2><h3>1、各种特殊情况的处理原则</h3><h4>1）机场班线车遇到航班晚点时的处理办法：</h4><p>机场班线车一般情况下是按固定时间固定地点运行的。但当接机遇到航班晚点时，司机有权根据当时实际条件来决定是否继续等候，如果决定等候，先到的客人有义务配合，但等侯时间最多不超过一小时，一小时以后如航班还未到达，司机有权取消等候。如果当天后面还有其它班线车的话客人可以继续乘坐，如果是末班车，乘客可选择打车返回或住在机场，产生费用客人自理。航班延误的客人在平台上已经支付的乘车费用，可以退还一半。如果是其他原因客人放弃乘坐的，费用不退。</p><h4>（2）乡镇班线车遇到晚点时的处理办法：</h4><p>为充分考虑到外出旅游的客人返回常州的时间很难准点，这就需要接送司机灵活掌握。因此，如果客人晚点时司机有权决定该趟班线车是否等候。如果决定等候，先到的客人有义务配合，但等侯的时间最多不得超过45分钟，45分钟以后如客人还未抵达，就只能改乘后面的其他班线车，即使后面没有其他班线车，公司都会再增派车辆将晚点的客人送回至周边各乡镇。如果是客人自行放弃乘坐的，费用不退。</p><h3>2、下单时间：</h3><p>本接送车是按照网约车的形式提前预约再乘坐的模式运行的，目前预约时间是提前24小时（含）以上才可以下单。如果需要取消订单同样需要提前24小时（含）以上。特殊情况请与平台客服电话联系。</p><h3>3、接送信息变更</h3><p>下单后，如果需要变更接送信息，可以联系客服进行修改。或者在可退单的情况下，先退单，再重新下单。</p><h3>4、乘客随身携带行李的规定</h3><p>参照交通运输部《道路旅客运输及客运站管理规定》。现明确为，每个乘客可以随身免费携带一件行李，体积不超过20×40×55 立方厘米。如超过标准，每增加一件行李需再支付自己车票的一半作为单件行李费，依次类推。</p><h3>5、文明安全乘车规定</h3><p>乘坐班线车应当遵守社会公德，讲究文明礼貌，服从管理，共同维护乘车秩序。爱惜车内各项设施，车厢内禁止吸烟，不准随地吐痰或向窗外乱扔杂物。严禁携带易燃、易爆、剧毒、放射性等危险物品或其他有碍乘客安全和健康的物品乘坐班车，如汽油、酒精（乙醇）、液化气、天氖水、硫酸、鞭炮、未经包装的刀具、玻璃等以及家禽和其他暴露的腥、臭、污秽物品。</p><h3>6、投诉处理</h3><p>在乘车服务过程中，当您对为您服务的车辆及司机有任何不满或需要帮助时，请第一时间与平台值班电话联系，以便能及时为您解决问题，值班投诉电话：0519-88882002。</p><h3>7、退单费用</h3><p>因为下单支付时会产生一定量的手续费，因此平台退单将收取百分之一的手续费。</p><h3>8、接送运价</h3><p>所有接送目的地的运价已经在空巴通平台系统中做了明码标价（详见平台系统）</p><h3>9、订单支付方式</h3><p>订单支付由第三方软件支付宝或微信完成在线支付。</p><h3>10、电子账单</h3><p>每一位注册用户可根据自己的账号自动罗列费用流水，该账目视为有效电子账单；</p><h3>11、关于发票</h3><p>乘客如需发票，请在下单时填写发票邮寄地址，汽车公司会把发票邮寄给到您。</p><h3>12、其他</h3><p>乘客在空巴通平台上下单后，工作人员会在乘客的实际乘车前把接送司机电话和平台值班电话以短信形式发送到乘客手机上，方便乘客与司机对接联系。</p><p>根据《国务院关于加强道路交通安全工作的意见》之精神及规定禁止客运车辆在凌晨2点至5点期间运行。</p><h2>三、关于空巴通接送平台</h2><p>空巴通接送平台是应用互联网技术而建立的在线预约平台，接送服务是由常州地区拥有营运资质的专业客运公司承运。安全、专业、舒适、便捷是平台服务的追求。</p><p>平台24小时客服电话为：0519-88882002。</p><h2>四、免责条款</h2><h3>1.因不可抗拒因素（如自然灾害、如台风、洪水、冰雹等）导致乘客未能按规定时间送达，空巴通公司不承担相应责任。因乘客自身健康原因造成的或是乘客故意重大过失造成的本公司概不负责。 </h3>  <h3>2.乘客如果在司机按时到达约定上车地点之前自行离开，空巴通公司不承担相应责任。</h3><h3>3.司机按时到达约定上车地点，因乘客迟到导致不能按时到达目的地，空巴通公司不承担相应责任。 </h3><h3>五、在本平台上预约报名时，视作乘客已经阅读并接受以上条款。</h3>',
        litwo:' <h1>用车须知</h1> <h3>1．定制包车产品提供城市间点到点的个性化接送服务，司机会根据路况合理安排行程。如您有特殊需求：如需在多个地点上下车、有老人儿童坐车需特殊照顾等，请在人工客服电话中说明。</h3> <h3>2．提交用车订单后，客服人员会第一时间处理您的订单，日内将会给你来电，请您一定要接听。</h3><h3>3．各车型的承载人数及行李都有所限制，请您自主协调，由于您自身选择车型不符而影响您的用车，请自行承担损失。</h3><h3>4．订单金额为一次用车服务的全部费用，包含车辆使用费、司机服务费、高速费等所有常规费用，如无特殊情况，您无需额外支付其他费用。</h3><h2>退改规则</h2>  <h3>1.如您因个人原因需要退单，可拨打电话0519-8888-2002为您退款。在用车前5小时申请退单，我们将为您全额退款；用车前5小时至2小时之间退单，收取支付金额的30%作为违约金；用车前2小时以内，由于司机已经就位，订单不可取消，敬请谅解。</h3><h3>2. 订单不支持修改，若您需要修改订单请在用车前5小时取消订单，然后重新下单。</h3><h3> 3. 若下单时使用了红包，退单时红包不予退还</h3> <h3> 4. 如用车时间前3小时还未收到派车短信或客服电话，最后未使用包车，为您全额退款。</h3><h2>免费等候</h2>    <h3>1.接机服务：</h3><p>若您接机提供了航班号，司机将按照航班实际抵达时间提供服务，航班抵达后司机最长免费等候1小时。若您接机未提供航班号，司机将会按照约定时间免费等待1小时。</p><h3>2. 送机与其他包车服务：</h3><p>司机将会按约定时间免费等待30分钟。超过免费等待时间您仍未到达或无法联系，司机将无法继续等待，订单费用无法退还。</p><h2>关于发票</h2><p>如您需要发票报销，请在客服电话时说明发票信息，我们将会提前为您准备发票并在用车时由司机为您带到（或邮寄）。如您提交订单后忘记填写发票信息，请联系在线客服或拨打0519-8888-2002为您补录，如您在用车过后申请发票，我们将在7个工作日内为您补寄，邮寄形式为货到付款，具体邮费以快递公司开具单据为准。暂不支持港、澳、台等偏远地区的邮寄，请您谅解！</p><p>光大国旅祝您旅途愉快。</p>',
        lithree:'<h1>团队包车注意事项</h1><h3>1. 订单金额为一次用车服务的全部费用，已包含车辆使用费、司机服务费、高速费等常规费用。</h3><h3>2. 若您的行程因上下车点过多，偏远地区绕行绕远，将由客服人员联系您进行费用补收说明。司机不得向乘客收取任何费用。</h3><h3>3. 9座及以上座位数车型请至少提前2天预订，以保证订单成功派车（高速限行时间夜间22：00~次日05：00）</h3>',
        lifour:'<h1>空巴通客服电话</h1><p>如果帮助中心不能解决您的问题，请拨打空巴通客服电话：</p><h3>0519-8888-2002</h3>',
        lifive:'',
    },
    about:{
        lione:'<div class="about-tjone clearfix">空巴通是江苏空巴通信息科技有限公司（常州）开发的用车服务在线预订软件，注册资本1000万元，成立于2018年06月13日，目前公司主要业务是顺风车业务、团队包车业务、接送服务等。</div>',
        litwo:'<div class="about-tjtwo clearfix"><span>关注空巴通快线,领取福利</span><img src="../img/kbt-wx.jpg"></div>',
        lithree:'<div class="about-tjthree clearfix"><div class="about-tjthreeleft left clearfix"><h3>联系我们</h3><span>空巴通客服电话：0519-8888-2002</span><span>官方微信公众号：空巴通快线</span></div><div class="about-tjthree-right right clearfix"><span class="about-tjthree-rtdz">地址</span><span class="about-tjthree-rtname">常州市天宁区新堂北路116号</span><a href="javascript:;"><img src="../img/kbt_dz.png"></a> </div></div>',
    },
    notice:{
        lione:'<div class="notice-ctright-xinw clearfix"><h1>助力群众出行，空巴通正式上线了</h1><h2> 2019-3-20 16:48网站公告空巴通</h2><p>近日，空巴通正式上线，经过几个月紧锣密鼓的筹备，城际+市内一站式出行解决方案得到进一步优化。目前，已在上海、常州、苏州、南京、无锡、杭州、泰州、南通等城市上线了城际+市内的一站式地面交通出行服务，旅客在一个平台即可实现顺风车、团队包车、接送服务等便捷交通服务。</p></div>',
        litwo:'',
        lithree:''
    }
}
  // 资讯公告页绑定的数据
  function help(){
    var helpData={
        pageli:1,   // 当前页面点击的li市第几个,默认第一个
    }
    
    function lihover(){
        var val = helpData.pageli;
        var template = "";
        $("#helppage-one").css("color","#333");
        $("#helppage-two").css("color","#333");
        $("#helppage-three").css("color","#333");
        $("#helppage-four").css("color","#333");
        $("#helppage-five").css("color","#333");
        if(val===1){
            $("#helppage-one").css("color","#2290f9");
            template = pageTemplate.help.lione;
        }else if ( val === 2) {
            $("#helppage-two").css("color","#2290f9");
            template = pageTemplate.help.litwo;
        }else if ( val === 3) {
            $("#helppage-three").css("color","#2290f9");
            template = pageTemplate.help.lithree;
        }else if ( val === 4) {
            $("#helppage-four").css("color","#2290f9");
            template = pageTemplate.help.lifour;
        }else if ( val === 5) {
            $("#helppage-five").css("color","#2290f9");
            template = pageTemplate.help.lifive;
        }
        $("#help-cttight").empty();
        $("#help-cttight").append(template);
    }
    lihover(); 
    $("#helppage-one").bind("click",function(){
        helpData.pageli = 1;
        lihover();
    });
    $("#helppage-two").bind("click",function(){
        helpData.pageli = 2;
        lihover();
    });
    $("#helppage-three").bind("click",function(){
        helpData.pageli = 3;
        lihover();
    });
    $("#helppage-four").bind("click",function(){
        helpData.pageli = 4;
        lihover();
    });
    $("#helppage-five").bind("click",function(){
        helpData.pageli = 5;
        lihover();
    });   
}

// 关于我们页绑定的函数
    function about(){
        var nowpage = 1 ;
        function liclick () {
            var template = "";
            $("#about-centernr").empty();
            $("#about-ctheaderone").css('color',"#333");
            $("#about-ctheadertwo").css('color',"#333");
            $("#about-ctheaderthree").css('color',"#333");
            if (nowpage===1){
                $("#about-ctheaderone").css('color',"#358eec");
                template = pageTemplate.about.lione;
            }else if (nowpage ===2){
                $("#about-ctheadertwo").css('color',"#358eec");
                template = pageTemplate.about.litwo;
            }else if (nowpage ===3){
                $("#about-ctheaderthree").css('color',"#358eec");
                template = pageTemplate.about.lithree;
            }
            $("#about-centernr").append(template);
        }
        liclick ();
        $("#about-ctheaderone").bind("click",function(){
            nowpage = 1;
            liclick ();
        })
        $("#about-ctheadertwo").bind("click",function(){
            nowpage = 2;
            liclick ();
        })
        $("#about-ctheaderthree").bind("click",function(){
            nowpage = 3;
            liclick ();
        })
    }
// 资讯公告
    function notice () {
        var nowpage = 1 ;
        function liclick () {
            var template = "";
            $("#notice-nr").empty();
            $("#notice-lione").css('color',"#333");
            $("#notice-litwo").css('color',"#333");
            $("#notice-lithree").css('color',"#333");
            if (nowpage===1){
                $("#notice-lione").css('color',"#358eec");
                template = pageTemplate.notice.lione;
            }else if (nowpage ===2){
                $("#notice-litwo").css('color',"#358eec");
                template = pageTemplate.notice.litwo;
            }else if (nowpage ===3){
                $("#notice-lithree").css('color',"#358eec");
                template = pageTemplate.notice.lithree;
            }
            $("#notice-nr").append(template);
        }
        liclick ();
        $("#notice-lione").bind("click",function(){
            nowpage = 1;
            liclick ();
        })
        $("#notice-litwo").bind("click",function(){
            nowpage = 2;
            liclick ();
        })
        $("#notice-lithree").bind("click",function(){
            nowpage = 3;
            liclick ();
        })
    }