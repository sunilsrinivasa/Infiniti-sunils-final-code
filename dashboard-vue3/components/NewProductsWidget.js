export default {
    template:`
    <div class="card table-card">
        <div class="card-header">
            <h5>New Products</h5>
            <div class="card-header-right">
                <ul class="list-unstyled card-option">
                    <li class="first-opt"><i
                            class="feather icon-chevron-left open-card-option"></i>
                    </li>
                    <li><i class="feather icon-maximize full-card"></i>
                    </li>
                    <li><i class="feather icon-minus minimize-card"></i>
                    </li>
                    <li><i
                            class="feather icon-refresh-cw reload-card"></i>
                    </li>
                    <li><i class="feather icon-trash close-card"></i>
                    </li>
                    <li><i
                            class="feather icon-chevron-left open-card-option"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-block p-b-0">
            <div class="table-responsive">
                <table class="table table-hover m-b-0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Product Code</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products">
                            <td>{{product.name}}</td>
    
                            <td>{{product.product_code}}</td>
                            <td>{{product.customer}}</td>
                            <td>
                            <label class="label label-danger" v-if="product.status==='Out Stock'">{{product.status}}</label>
                            <label class="label label-success" v-else>{{product.status}}</label>
                            </td>
                            <td>
                                <a href="#!" v-for="_ in product.rating"><i
                                        class="fa fa-star f-12 text-c-yellow"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`,
    props:['products']
}