import React from 'react'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import {
  LineChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
)
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'line'
    }
  ]
}

const LineChartExample = () => {
  return (
    <div className='w-96'>
      <ReactEChartsCore
        echarts={echarts}
        option={option}
        notMerge
        lazyUpdate
        theme={{ color: '#2C3F52' }}
      />
    </div>
  )
}

export default LineChartExample
