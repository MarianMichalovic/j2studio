import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="px-6 py-24 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">Zostaňte informovaní</h2>
        <p className="text-gray-400 mb-8">
          Získajte najnovšie nehnuteľnosti a prehľady trhu priamo do vašej e-mailovej schránky.
        </p>

        <div className="flex max-w-md mx-auto">
          <Input
            placeholder="E-mailová adresa"
            className="rounded-none border-gray-700 bg-transparent text-white placeholder:text-gray-500 focus:border-white"
          />
          <Button className="rounded-none bg-white text-black hover:bg-gray-100 px-8 transition-colors">
            Prihlásiť sa
          </Button>
        </div>

        <p className="text-gray-500 text-xs mt-4">Žiadny spam, kedykoľvek sa môžete odhlásiť.</p>
      </div>
    </section>
  )
}
