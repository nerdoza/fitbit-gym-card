function settings (props) {
  return (
    <Page>
      <Section title={<Text bold align='center'>Gym Key</Text>}>
        <TextInput settingsKey='code' type='text' label='Code' />
      </Section>
    </Page>
  )
}

registerSettingsPage(settings)
