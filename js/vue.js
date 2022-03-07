var queData = [
  ['スキー','スノーボード'],
  ['初級者','中級者','上級者'],
  ['非圧雪多め','気にしない'],
  ['3000m以上','気にしない'],
  ['1500m未満','1500m以上','気にしない']
]

var app = new Vue({
  el:'#Diagnosis',
  data:{
    answer:[],
    answer_num:$('.menuItem').length,
    sex:'',
    current_num:0,
    toilet:'',
    amount:'',
    demand:'',
    suply:'',
    result_active:'',
    nemu_active:'',
    result_txt:'',
    result:{
      '00000':6,
      '10000':3,
      '01000':21,
      '11000':21,
      '02000':6,
      '12000':21,
      '00100':6,
      '10100':20,
      '01100':19,
      '11100':2,
      '02100':6,
      '12100':21,
      '00010':6,
      '10010':9,
      '01010':8,
      '11010':8,
      '02010':6,
      '12010':8,
      '00110':6,
      '10110':9,
      '01110':4,
      '11110':2,
      '02110':4,
      '12110':4,
      '00001':3,
      '10001':3,
      '01001':40,
      '11001':40,
      '02001':41,
      '12001':3,
      '00101':0,
      '10101':0,
      '01101':1,
      '11101':1,
      '02101':7,
      '12101':7,
      '00011':3,
      '10011':3,
      '01011':40,
      '11011':40,
      '02011':41,
      '12011':3,
      '00111':0,
      '10111':0,
      '01111':1,
      '11111':1,
      '02111':7,
      '12111':7,
      '00002':3,
      '10002':3,
      '01002':21,
      '11002':21,
      '02002':6,
      '12002':21,
      '00102':0,
      '10102':0,
      '01102':1,
      '11102':1,
      '02102':6,
      '12102':7,
      '00012':3,
      '10012':3,
      '01012':8,
      '11012':8,
      '02012':6,
      '12012':8,
      '00112':0,
      '10112':0,
      '01112':1,
      '11112':1,
      '02112':4,
      '12112':4,
    },
    result_num:''
  },
  watch: {
      result_num:function(n,o){
        this.result_txt = queData[0][this.sex]+' >> ' + queData[1][this.toilet] +' >> ' +queData[2][this.amount] +' >> ' +queData[3][this.demand] + ' >> ' +queData[4][this.suply] +' を選択した時のコンテンツ'
      }
  },
  created:function(){
    var _t = this;
    setTimeout(function(){
      _t.nemu_active = '__active';
                         },400);
  },
  methods:{
    check:function(){
      this.answer[0] = this.sex;
      this.answer[1] = this.toilet;
      this.answer[2] = this.amount;
      this.answer[3] = this.demand;
      this.answer[4] = this.suply;
      this.current_num = this.answer.indexOf('');
      
      if(this.answer.indexOf('')==-1){
        this.nemu_active = '__hide';
        this.result_active = '__active';
        this.result_num = this.result[this.answer.join('')];
      }
    }
  }
})
