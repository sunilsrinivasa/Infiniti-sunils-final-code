export default {
    template:`
    <div class="card proj-progress-card">
    <div class="card-block">
        <div class="row">
                <div class="col-xl-3 col-md-6" v-for="summary in summaries">
                    <h6>{{summary.title}}</h6>
                    <h5 class="m-b-30 f-w-700">{{summary.value}}<span
                            class="text-c-green m-l-10">{{summary.percentage}}</span></h5>
                    <div class="progress">
                        <div :class="getIconClassForTitle(summary.title)" :style="getWidthForTitle(summary.title)">
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
    `,
    props:['summaries'],
    methods: {
        getIconClassForTitle(title){
            switch(title){
                case 'Published Project':return 'progress-bar bg-c-red';
                case 'Completed Task':return 'progress-bar bg-c-blue';
                case 'Successfull Task':return 'progress-bar bg-c-green';
                case 'Ongoing Project':return 'progress-bar bg-c-yellow';
            }
        },
        getWidthForTitle(title){
            switch(title){
                case 'Published Project':return 'width: 25%;';
                case 'Completed Task':return 'width: 65%;';
                case 'Successfull Task':return 'width: 85%';
                case 'Ongoing Project':return 'width: 45%;'; 
            }
        }
    },

}