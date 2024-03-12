export default {
    template:`
        <div v-for="summary in summaries">
        <div class="card comp-card">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col">
                    <h6 class="m-b-25">{{summary.title}}</h6>
                    <h3 class="f-w-700 text-c-blue">{{summary.value}}</h3>
                    <p class="m-b-0">{{summary.duration}} ({{summary.year}})</p>
                </div>
                <div class="col-auto">
                    <i :class="getClassForTitle(summary.title)"></i>
                </div>
            </div>
        </div>
    </div>
        </div>
    `,
    props:['summaries'],
    methods: {
        getClassForTitle(title){
            switch(title){
                case 'Impressions':return 'fas fa-eye bg-c-blue';
                case 'Goal':return 'fas fa-bullseye bg-c-green';
                case 'Impact':return 'fas fa-hand-paper bg-c-yellow';
            }
        }
    },
}