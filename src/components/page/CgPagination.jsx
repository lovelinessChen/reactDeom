import React from 'react'
import './CgPagination.scss'

export default function CgPagination(props) {
  let { total, pageSize, currentPage, changePage } = props;

  // 获取所有的页码列表并放到一个数组中
  let pageList = []
  const getPageList = () => {
    //获取总页数
    let pageNum = Math.ceil(total / pageSize)
    for (let i = 1; i <= pageNum; i++) {
      pageList.push(i)
    }
  }
  getPageList()
  //执行函数 下一页
  const nextBtn = () => {
    //判断:如果当前页码不是最后一页就可以点击
    if (currentPage < Math.ceil(total / pageSize)) {
      changePage(currentPage + 1)
    }
  }
  // 上一页
  const preBtn = () => {
    // 判断 当前页码 必须 >1 不是第一页 就可以点击
    if (currentPage > 1) {
      changePage(currentPage - 1)
    }
  }

  //修改页码
  const editPage = (e) => {
    changePage(e.target.value)
  }
  //直接点击页码盒子切换
  const selectPage = (page) => {
    changePage(page)
  }


  return (
    <div className='pagination'>
      <div>
        总数: {total}
      </div>
      <div className='pre' onClick={preBtn}>上一页</div>
      {
        pageList.map(item => (
          <div className={currentPage == item ? 'item active' : 'item'}
            key={item}
            onClick={() => selectPage(item)}
          >
            {item}
          </div>
        ))
      }
      <div className='next' onClick={nextBtn}>下一页</div>
      前往第:
      <input type="text" value={currentPage} onChange={(e) => editPage(e)} /> 页
    </div>
  )
}
