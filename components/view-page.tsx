import { useLanguage } from "@/provider/language-provider"
import { LocaleContent } from "@/payload/content-types"
import { getContent } from "@/payload/get-content"
import { useLivePreview } from "@payloadcms/live-preview-react"
import { useQuery } from "@tanstack/react-query"
import { Page } from "payload/content-types"

interface ViewContentProps<T extends Page> {
  page: T
  View: (args: { data: LocaleContent[T] | null | undefined }) => React.ReactNode
}

interface LiveViewContentProps<T extends Page> {
  page: T
  data: LocaleContent[T]
  View: (args: { data: LocaleContent[T] | null | undefined }) => React.ReactNode
}

export function ContentQuery<T extends Page>(page: T, locale: string) {
  const { isPending, data, error } = useQuery({
    queryKey: [`${page}Content`, locale],
    queryFn: () => getContent(page, locale),
  })
  return data
}

export function LiveView<T extends Page>(data: LocaleContent[T], page: T) {
  const { data: liveData } = useLivePreview({
    initialData: data,
    serverURL: process.env.DEPLOYMENT_URL || "http://localhost:3000",
    depth: 2,
  })
  return liveData
}

function LiveViewPage<T extends Page>({ data, page, View }: LiveViewContentProps<T>) {
  const liveData = LiveView(data, page)
  return <View data={liveData} />
}

export default function ViewPage<T extends Page>({ page, View }: ViewContentProps<T>) {
  const { locale } = useLanguage()
  const data = ContentQuery(page, locale)

  if (data) {
    return <LiveViewPage key={locale} data={data} page={page} View={View} />
  }

  return <View data={data} />
}
