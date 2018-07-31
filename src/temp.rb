require 'json'

# def speedTest(repetitions=1, &block)
# 	t = Time.now
# 	repetitions.times(&block)
# 	Time.now - t
# end
def assignIds(items)
	items.each_with_index {|item, index| item['id'] = index}
end

allItems = JSON.parse(File.read("./AllItems.json", mode: "rt"))
###
relics = allItems.select {|i| i['type'] == 'Relic' && i['name'].end_with?('Intact')}
relics.each {|i| i.delete('patchlogs')}
assignIds(relics)
###
primeItems = allItems.select {|i| i['name'].include?('Prime')}
primeItemsWithComponents = primeItems.select {|i| i.has_key?('components')}
# primeItemsWithComponentsWithoutPatchLogs = primeItemsWithComponents.each {|i| i.delete('patchlogs')}
# File.write("./PrimeItems.json", JSON.pretty_generate(primeItemsWithComponentsWithoutPatchLogs), mode: "wt")

primeParts = []
primeItemsWithComponents.each {|i|
	i['components'].each {|c|
		c['name'] = "#{i['name']} #{c['name']}"
	}
	primeParts += i['components']
}
primePartsFromRelics = primeParts.select {|p| p.has_key?('ducats')}
primePartsFromRelics.each {|p| p['drops'].select! {|d| d['location'].end_with?('Intact')}}
assignIds(primePartsFromRelics)
###
primePartsFromRelics.each {|p|
	p['drops'].each {|d|
		relic = relics.find {|r| r['name'] == d['location']}
		d['relicId'] = relic['id']
		relic['primePartsIds'] ||= []
		relic['primePartsIds'].push(p['id'])
	}
}
###
File.write("./PrimeParts.json", JSON.pretty_generate(primePartsFromRelics), mode: "wt")
File.write("./Relics.json", JSON.pretty_generate(relics), mode: "wt")