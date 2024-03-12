export default {
    template: `
    <div class="card latest-update-card">
        <div class="card-header">
            <h5>What's New</h5>
            <!-- Card Header Options -->
        </div>
        <div class="card-block">
            <div class="scroll-widget" style="height: 290px; overflow-y: auto;">
                <div class="latest-update-box" v-for="item in whatsnew" :key="item.message">
                    <div class="row p-t-20 p-b-30">
                        <div class="col-auto text-right update-meta p-r-0">
                            <!-- Conditional rendering for icons and images -->
                            <i v-if="isPendingTask(item.message)" class="feather icon-briefcase bg-c-red update-icon"></i>
                            <i v-else-if="isNewOrder(item.message)" class="feather icon-check f-w-600 bg-c-green update-icon"></i>
                            <img v-else src="./template_files/avatar-4.jpg" alt="user image" class="img-radius img-40 align-top m-r-15 update-icon">
                        </div>
                        <div class="col p-l-5">
                            <a href="#!"><h6>{{ item.message }}</h6></a>
                            <p class="text-muted m-b-0">{{ item.created_by }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    props: ['whatsnew'],
    methods: {
        isPendingTask(message) {
            return message.includes('pending Task');
        },
        isNewOrder(message) {
            return message.includes('New Order');
        },
    },
}
