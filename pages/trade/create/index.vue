<template>
    <div class="content-wrap">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="join-col">
                        <div class="bg-img-left">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="19" class="join-col-text">
                                    {{ $t('pages.post_trade.join_our_referral_program') }}
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="5" class="proposal-btn-wrap">
                                    <el-button plain class="proposal-btn">{{ $t('pages.post_trade.join_btn') }}</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="follow-col">
                        <div class="bg-img-right">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="24" :lg="19" :xl="19" class="follow-col-text">
                                    {{ $t('pages.post_trade.follow_our_promotions') }}
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="24" :lg="5" :xl="5" class="proposal-btn-wrap">
                                    <el-button plain class="proposal-btn">{{ $t('pages.post_trade.more') }}</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-collapse v-model="activeNames" class="advertisement-rules">
                    <el-collapse-item :title="$t('pages.post_trade.advertisement_rules')" name="1" class="advertisement-rules-collapse">
                        <ul>
                            <li class="li-rules">{{ $t('pages.post_trade.li.a') }}</li>
                            <li class="li-rules">{{ $t('pages.post_trade.li.b') }}</li>
                            <li class="li-rules">{{ $t('pages.post_trade.li.c') }}</li>
                            <li class="li-rules">{{ $t('pages.post_trade.li.d') }}</li>
                            <li class="li-rules">{{ $t('pages.post_trade.li.e') }}</li>
                            <li class="li-rules">{{ $t('pages.post_trade.li.f') }}</li>
                            <li class="li-rules">{{ $t('pages.post_trade.li.g') }}</li>
                            <li class="li-rules">{{ $t('pages.post_trade.li.i') }}</li>
                            <li class="li-rules">{{ $t('pages.post_trade.li.j') }}</li>
                            <li class="li-rules">{{ $t('pages.post_trade.li.u') }}</li>
                        </ul>
                    </el-collapse-item>
                </el-collapse>
                <el-card class="box-card box-card-create-trade" :body-style="{height:'175px', borderRadius:'0'}">
                    <el-form :label-position="labelPosition" label-width="220px" :model="formLabelAlign">
                        <el-form-item label="" prop="resource">
                            <span>{{$t('placeholders.resources')}}</span>
                            <el-tooltip class="item" effect="dark" :content="$t('pages.post_trade.hits.a')" placement="top-start">
                                <i class="el-icon-question icon-help"></i>
                            </el-tooltip>
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-radio-group v-model="formLabelAlign.resource">
                                        <el-radio label="online"></el-radio>
                                        <el-radio label="offline"></el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        {{ $t('pages.post_trade.hits.a') }}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item :label="$t('placeholders.location')" prop="resource">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-select
                                        v-model="value"
                                        filterable
                                        remote
                                        reserve-keyword
                                        :placeholder="$t('placeholders.please_enter_a_keyword')"
                                        :remote-method="remoteMethod"
                                        :loading="loading">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="" prop="resource">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-button class="resource-btn">{{$t('pages.post_trade.btn.btc')}}</el-button>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        {{$t('pages.post_trade.ability_to_create')}}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-card shadow="never" class="box-card box-card-create-trade" :body-style="{height:'175px', borderRadius:'0'}">
                                        <el-row>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="{span:8, offset:1}">
                                                <div>{{$t('pages.post_trade.sell')}}</div>
                                                <el-form-item label="">
                                                    <el-select
                                                        v-model="value"
                                                        filterable
                                                        remote
                                                        reserve-keyword
                                                        :placeholder="$t('placeholders.please_enter_a_keyword')"
                                                        :remote-method="remoteMethod"
                                                        :loading="loading">
                                                        <el-option
                                                            v-for="item in options"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <div>{{$t('pages.post_trade.amount')}}</div>
                                                <el-form-item label="">
                                                    <el-input :placeholder="$t('placeholders.please_input')" v-model="formLabelAlign.input"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="{span:2, offset:1}" class="icon-exchange-outer">
                                                <div class="icon-exchange-wrap">
                                                    <i class="el-icon-refresh icon-exchange"></i>
                                                </div>
                                            </el-col>
                                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="{span:8, offset:1}">
                                                <div>{{$t('pages.post_trade.buy')}}</div>
                                                <el-form-item label="">
                                                    <el-select
                                                        v-model="value"
                                                        filterable
                                                        remote
                                                        reserve-keyword
                                                        :placeholder="$t('placeholders.please_enter_a_keyword')"
                                                        :remote-method="remoteMethod"
                                                        :loading="loading">
                                                        <el-option
                                                            v-for="item in options"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <div>{{$t('pages.post_trade.amount')}}</div>
                                                <el-form-item label="">
                                                    <el-input :placeholder="$t('placeholders.please_input')" v-model="formLabelAlign.input"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <span>{{$t('pages.post_trade.rate_equation')}}</span>
                            <el-tooltip class="item" effect="dark" :content="$t('pages.post_trade.hits.b')" placement="top-start">
                                <i class="el-icon-question icon-help"></i>
                            </el-tooltip>
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.region"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        {{$t('pages.post_trade.hits.b')}}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item :label="$t('pages.post_trade.price_uah')">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item :label="$t('pages.post_trade.payment_method')">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-select
                                        v-model="value"
                                        filterable
                                        remote
                                        reserve-keyword
                                        :placeholder="$t('placeholders.please_enter_a_keyword')"
                                        :remote-method="remoteMethod"
                                        :loading="loading">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item :label="$t('pages.post_trade.bank_name')">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item :label="$t('pages.post_trade.payment_details')">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <span>{{$t('pages.post_trade.min_price')}}</span>
                            <el-tooltip class="item" effect="dark" :content="$t('pages.post_trade.hits.c')" placement="top-start">
                                <i class="el-icon-question icon-help"></i>
                            </el-tooltip>
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        {{$t('pages.post_trade.hits.c')}}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <span>{{$t('pages.post_trade.margin')}}</span>
                            <el-tooltip class="item" effect="dark" :content="$t('pages.post_trade.hits.d')" placement="top-start">
                                <i class="el-icon-question icon-help"></i>
                            </el-tooltip>
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        {{$t('pages.post_trade.hits.d')}}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <span>{{$t('pages.post_trade.min_transaction')}}</span>
                            <el-tooltip class="item" effect="dark" :content="$t('pages.post_trade.hits.e')" placement="top-start">
                                <i class="el-icon-question icon-help"></i>
                            </el-tooltip>
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        {{$t('pages.post_trade.hits.e')}}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <span>{{$t('pages.post_trade.max_transaction')}}</span>
                            <el-tooltip class="item" effect="dark" :content="$t('pages.post_trade.hits.f')" placement="top-start">
                                <i class="el-icon-question icon-help"></i>
                            </el-tooltip>
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input v-model="formLabelAlign.type"></el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        {{$t('pages.post_trade.hits.f')}}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-row>
                                        <el-checkbox v-model="formLabelAlign.checked">
                                        </el-checkbox>
                                        {{$t('pages.post_trade.hits.g')}}
                                        <el-tooltip class="item" effect="dark" :content="$t('pages.post_trade.hits.i')" placement="top-start">
                                            <i class="el-icon-question icon-help"></i>
                                        </el-tooltip>
                                    </el-row>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <span>{{$t('pages.post_trade.terms_of_trade')}}</span>
                            <el-tooltip class="item" effect="dark" :content="$t('pages.post_trade.hits.j')" placement="top-start">
                                <i class="el-icon-question icon-help"></i>
                            </el-tooltip>
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-input
                                        type="textarea"
                                        autosize
                                        placeholder=""
                                        v-model="formLabelAlign.textarea">
                                    </el-input>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        {{$t('pages.post_trade.hits.j')}}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-row>
                                        <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                            <el-checkbox v-model="formLabelAlign.checked">
                                            </el-checkbox>
                                            <div class="checkbox-adjust">{{$t('pages.post_trade.verified_users_only')}}</div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                            <el-checkbox v-model="formLabelAlign.checked">
                                            </el-checkbox>
                                            <div class="checkbox-adjust">{{$t('pages.post_trade.trusted_users_only')}}</div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                            <el-checkbox v-model="formLabelAlign.checked">
                                            </el-checkbox>
                                            <div class="checkbox-adjust">{{$t('pages.post_trade.identify_user_before_continue_trade')}}</div>
                                        </el-col>
                                    </el-row>
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="{span:10, offset:1}" :lg="{span:10, offset:1}" :xl="{span:10, offset:1}">
                                    <div class="form-hits">
                                        {{$t('pages.post_trade.hits.u')}}
                                    </div>
                                    <div class="form-hits">
                                        {{$t('pages.post_trade.hits.m')}}
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13">
                                    <el-collapse v-model="activeNames" class="advertisement-rules">
                                        <el-collapse-item :title="$t('pages.post_trade.set_your_time')" name="2" class="time-collapse">
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Mo
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="{span:20, offset:1}" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        :start-placeholder="$t('pages.post_trade.start_time')"
                                                        :end-placeholder="$t('pages.post_trade.end_time')">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Tu
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="{span:20, offset:1}" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        :start-placeholder="$t('pages.post_trade.start_time')"
                                                        :end-placeholder="$t('pages.post_trade.end_time')">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        We
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="{span:20, offset:1}" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        :start-placeholder="$t('pages.post_trade.start_time')"
                                                        :end-placeholder="$t('pages.post_trade.end_time')">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Th
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="{span:20, offset:1}" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        :start-placeholder="$t('pages.post_trade.start_time')"
                                                        :end-placeholder="$t('pages.post_trade.end_time')">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Fr
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="{span:20, offset:1}" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        :start-placeholder="$t('pages.post_trade.start_time')"
                                                        :end-placeholder="$t('pages.post_trade.end_time')">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Sa
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="{span:20, offset:1}" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        :start-placeholder="$t('pages.post_trade.start_time')"
                                                        :end-placeholder="$t('pages.post_trade.end_time')">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                    <el-checkbox v-model="formLabelAlign.checked">
                                                        Su
                                                    </el-checkbox>
                                                </el-col>
                                                <el-col :xs="{span:20, offset:1}" :sm="22" :md="22" :lg="22" :xl="22">
                                                    <el-time-picker
                                                        is-range
                                                        v-model="formLabelAlign.time1"
                                                        range-separator="To"
                                                        :start-placeholder="$t('pages.post_trade.start_time')"
                                                        :end-placeholder="$t('pages.post_trade.end_time')">
                                                    </el-time-picker>
                                                </el-col>
                                            </el-row>
                                        </el-collapse-item>
                                    </el-collapse>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="13" :lg="13" :xl="13" class="create-btn-wrap">
                                    <el-button class="create-trade-btn" type="primary" plain>{{$t('buttons.create')}}</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "create",
        data() {
            return {
                activeNames: '',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: '',
                    resource:'online',
                    input:'',
                    checked:'',
                    textarea:'',
                    time1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                },
                options: [],
                value: '',
                list: [],
                loading: false,
                states: ["Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado",
                    "Connecticut", "Delaware", "Florida",
                    "Georgia", "Hawaii", "Idaho", "Illinois",
                    "Indiana", "Iowa", "Kansas", "Kentucky",
                    "Louisiana", "Maine", "Maryland",
                    "Massachusetts", "Michigan", "Minnesota",
                    "Mississippi", "Missouri", "Montana",
                    "Nebraska", "Nevada", "New Hampshire",
                    "New Jersey", "New Mexico", "New York",
                    "North Carolina", "North Dakota", "Ohio",
                    "Oklahoma", "Oregon", "Pennsylvania",
                    "Rhode Island", "South Carolina",
                    "South Dakota", "Tennessee", "Texas",
                    "Utah", "Vermont", "Virginia",
                    "Washington", "West Virginia", "Wisconsin",
                    "Wyoming"]
            };
        },
        computed: {
            isMobileSize() {
                return (typeof window != "undefined") && window.innerWidth < 992;
            },
            labelPosition() {
                return this.isMobileSize ? 'top' :'right';
            }
        },
        mounted() {
            this.list = this.states.map(item => {
                return { value: `value:${item}`, label: `label:${item}` };
            });
        },
        methods: {
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options = [];
                }
            },
        }
    }
</script>

<style lang="scss">
    .advertisement-rules {
        margin: 40px 0 20px 0;
    }
    .box-card-create-trade {
        padding-top: 20px;
        padding-bottom: 40px;
    }
    .form-hits {
        font-size: 12px;
        color: gray;
        line-height: 1;
    }
    /deep/.form-label-top {
        /deep/ .el-form-item__label {
            height: 30px;
        }
    }
    .el-select {
        width: 100%;
    }
    .el-input__inner {
        width: 100% !important;
    }
    .el-collapse-item__header {
        line-height: 15px;
    }
    .advertisement-rules-collapse {
        .el-collapse-item__header {
            padding-left: 20px;
            font-size: 18px;
            color: #c5c8d0;
        }
    }
    .time-collapse {
        .el-collapse-item__header {
            padding-left: 20px;
            font-size: 12px;
            color: #c5c8d0;
        }
        .el-checkbox__label {
            padding-left: 5px;
        }
        .el-checkbox {
            margin-top: 5px;
        }
    }
    .icon-exchange-wrap {
        padding-top: 80px;
        width: 70px;
        display: flex;
        justify-content: center;
    }
    .icon-exchange {
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
        transition: color .15s linear;
    }
    .bg-img-left {
        background-image: url("../../../assets/images/svg/bg-1.svg");
        height: auto;
        color: white;
        padding-bottom: 5px;
    }
    .bg-img-right {
        background-image: url("../../../assets/images/svg/bg-2.svg");
        height: auto;
        color: white;
        padding-bottom: 5px;
    }
    .join-col {
        background: #3b8070;
        border-radius: 0;
        height: auto;
    }
    .follow-col {
        background: dodgerblue;
        border-radius: 0;
        height: auto;
    }
    .join-col-text, .follow-col-text {
        height: 100%;
        text-align: center;
        padding-top: 15px;
        font-size: 13px;
    }
    .proposal-btn-wrap {
        padding: 5px 10px 0 0;
    }
    .proposal-btn {
        width: 100%;
        color: #c5c8d0;
        font-weight: 600;
    }
    .li-rules {
        color: #909399;
    }
    .create-btn-wrap {
        display: flex;
        justify-content: flex-end;
    }
    .checkbox-adjust {
        line-height: 1;
        margin-bottom: 5px;
    }
    .icon-help {
        display: none;
    }
</style>
