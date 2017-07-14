import React ,{Component} from 'react';
import Head from '../content/Head';
import './Details.css';

class Details extends Component {
    render(){
        return(
            <div>
                <Head title="职位详情" back="back" home="home"/>
                <div id="content2">
                    <div className="postitle">
                        <h2 className="title">JAVA 工程师 ！程序猿~~</h2>
                    </div>

                    <div className="detail">
                        <div className="items">
                            <span className="item salary">
                                <em className="icon"></em>
                                <span className="text">10k-18k</span>
                            </span>
                            <span className="item workaddress">
                                <em className="icon"></em>
                                <span className="text">深圳</span>
                            </span>
                            <span className="item jobnature">
                                <em className="icon"></em>
                                <span className="text">全职</span>
                            </span>
                            <span className="item workyear">
                                <em className="icon"></em>
                                <span className="text">3-5年</span>
                            </span>
                            <span className="item education">
                                <em className="icon"></em>
                                <span className="text">本科及以上</span>
                            </span>
                        </div>
                        <br/>
                        <div className="temptation">
                            职位诱惑：金融证券项目，股权激励，年终奖！！
                        </div>
                    </div>

                    <div className="company activeable">
                        <img src="//www.lgstatic.com/image1/M00/00/34/Cgo8PFTUXJOAMEEpAAAroeFn454603.jpg" alt="" className="logo"/>
                        <div className="desc">
                            <div className="dleft">
                                <h2 className="title">金证股份</h2>
                                <p className="info"> 金融/ 上市公司/ 2000人以上</p>
                            </div>
                                 <span className="dright"></span>
                            </div>
                    </div>

                    <div className="positiondesc">
                        <div className="header">
                            职位描述
                        </div>
                        <div className="content">
                            <p>岗位职责：<br/></p>
                            <p>1. 参与系统的需求分析及设计;</p>
                            <p>2. 负责系统后台的代码开发、数据库开发，单元测试，解决开发过程中的业务及技术问题;</p>
                            <p>3. 参与开发文档的编写.</p>
                            <p>岗位要求：<br/></p>
                            <p>1、本科及以上学历、计算机相关专业； &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                            <p>2、2-3年Java开发经验，熟悉后台数据库； &nbsp;</p>
                            <p>3、团队意识强，性格开朗、有较好表达能力；</p>
                            <p>4、有CMMI、敏捷开发经验，有证券、银行、保险、基金等金融行业开发经验优先，能适应出差。</p>
                            <p><br/></p>
                        </div>
                    </div>

                    <div className="positioneval">
                        <div className="eval-title">
                            面试评价
                            <span id="total">(<span>0</span>)</span>
                        </div>
                        <ul className="list"><li className="list-item-empty list-item">暂无面试评价</li></ul>
                    </div>   
                    <div className="deliver" id="deliver_resume">投个简历</div>                 
                </div>
            </div>
                    )
                }
            }

export default Details


