import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="px-6 py-24 bg-neutral-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Zostaňte informovaní</h2>
        <p className="text-neutral-400 mb-8">
          Získajte najnovšie katalóg našich produktov a aktuálnych projektov priamo do Vášej emailovej schránky.
        </p>

        <div className="flex max-w-md mx-auto">
          <Input
            placeholder="E-mailová adresa"
            className="rounded-none border-neutral-700 bg-transparent text-white placeholder:text-neutral-500 focus:border-white"
          />
          <Button className="rounded-none bg-white text-black hover:bg-neutral-100 px-8 transition-colors">
            Prihlásiť sa
          </Button>
        </div>

        <p className="text-neutral-500 text-xs mt-4">Žiadny spam, kedykoľvek sa môžete odhlásiť.</p>
      </div>
    </section>
  )
}
