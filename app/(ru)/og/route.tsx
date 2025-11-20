import { ImageResponse } from 'next/og'

export async function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Персональный сайт Меликова Романа'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-3xl font-bold tracking-tight">
            {title}
          </h2>
          <div tw="flex flex-row border-gray-500 border-u-4 pu-24 md:flex-col md:border-l-4 md:pl-24 h-full">
            <h3 tw="flex flex-col text-3xl font-bold tracking-tight text-left">
              Номер телефона: 89648987475
            </h3>
            <h3 tw="flex flex-col text-3xl font-bold tracking-tight text-left">
              Telegram: @MeliiRoman
            </h3>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
export const dynamic = "force-static"