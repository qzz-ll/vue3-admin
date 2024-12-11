/*
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2024-09-04 16:13:40
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-04 16:13:45
 */
import * as echarts from "echarts/core"

import { BarChart, LineChart, PieChart, MapChart, PictorialBarChart, RadarChart } from "echarts/charts"

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  LegendComponent,
  RadarComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GraphicComponent
} from "echarts/components"

import { CanvasRenderer } from "echarts/renderers"

echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  CanvasRenderer,
  PictorialBarChart,
  RadarComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GraphicComponent
])

export default echarts