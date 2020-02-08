// 构建"容器模式"目的是分离redux或者其它高阶组件,并加工普通组件,这样的分离使代码更加易察易扩,使代码更加合理简洁化( 完成笔记 )
// 0. 容器模式: 实战1,分离高阶组件加载器
import { connect } from 'react-redux';

// 0. 核心: redux的compose函数解决高阶组件传输参数的问题, 同时也可以处理多个高阶组件
    // 0. 从右到左计算
    // 1. 注意来自'redux'不是'react-redux'
import { compose } from 'redux';

// 1. 加工的主角
import CollectionOverview from './collection-overview.component';

// 2. 高阶组件
import WithSpinner from '../with-spinner/with-spinner.component';

// 3. 所需select数据
import { createStructuredSelector } from 'reselect';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';

// 4. 这里的mapStateToProps参数是传给WithSPinner组件的,通过compose函数
const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionsLoaded,
});

// 5. 使用compose函数处理多个高阶组件且传输参数( 推荐 )
    // a) 注意: compose来自'redux', 不是'react-redux'
    // b) 同时也可以处理多个高阶组件
        // 0. 计算方式为"从右到左"
        // 1. 当前为先WithSpinner高阶组件处理, 在connect处理
    // c) 相当于: connect(mapStateToProps)(WithSpinner(CollectionOverview))
const CollectionOverviewContainer = compose( connect(mapStateToProps), WithSpinner )( CollectionOverview );

// 6. 导出加工后的结果
export default CollectionOverviewContainer;
