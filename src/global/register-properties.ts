import { App } from "vue"
import { formatUtcString } from "@/utils/date-formatTime"

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(time: string) {
      return formatUtcString(time)
    }
  }
}
