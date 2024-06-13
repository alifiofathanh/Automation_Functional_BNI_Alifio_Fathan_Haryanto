describe('Testing element', () => {
    it ('Find element by accessibility id', async() => { //Find element by ID
        const mediaOption = await $('~Media');

        await mediaOption.click();

        const audioFx = await $('~AudioFx');
        await expect(audioFx).toBeExisting();
    })
})

//test