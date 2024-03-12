export default {
    template: `
        <div class="card latest-update-card">
            <div class="card-header">
                <h5>Latest Activity</h5>
                <div class="card-header-right">
                    <ul class="list-unstyled card-option">
                        <li><i class="feather icon-chevron-left open-card-option"></i></li>
                        <li><i class="feather icon-maximize full-card"></i></li>
                        <li><i class="feather icon-minus minimize-card"></i></li>
                        <li><i class="feather icon-refresh-cw reload-card"></i></li>
                        <li><i class="feather icon-trash close-card"></i></li>
                        <li><i class="feather icon-chevron-left open-card-option"></i></li>
                    </ul>
                </div>
            </div>
            <div class="card-block">
                <div class="scroll-widget" style="height: 290px; overflow-y: auto;">
                    <div v-for="activity in latestactivities" :key="activity.activity_type" class="latest-update-box">
                        <div class="row p-t-20 p-b-30">
                            <div class="col-auto text-right update-meta p-r-0">
                                <i class="b-primary update-icon ring"></i>
                            </div>
                            <div class="col p-l-5">
                                <h6>{{ activity.activity_type }}</h6>
                                <p class="text-muted m-b-0">{{ activity.activity }} <a :href="activity.readmore_link" class="text-c-blue">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['latestactivities']
};
