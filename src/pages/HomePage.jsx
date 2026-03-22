import { Icon } from "@iconify/react"
import { Header } from "../components/HomePageComponent/Header"

export const HomePage = () => {
  return (
    <main className="flex min-h-screen bg-white dark:bg-bg-dark max-w-[1200px] mx-auto ">
      <section className="flex flex-col w-full h-screen">
        <article className="flex flex-col h-screen overflow-hidden border border-gray-200 dark:border-gray-600 border-t-0 border-b-0">
          <div className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-600 px-4 py-3">
            <Header/>
          </div>
          Principal
        </article>
        <article>
          Sidebar Derecho
        </article>
      </section>
    </main>
  )
}
