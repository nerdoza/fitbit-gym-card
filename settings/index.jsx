function settings(props) {
  return (
    <Page>
      <Section title={<Text bold align='center'>Gym Card</Text>}>
        <Text bold>Enter your gym card ID string into the ID field.</Text>
        <Text italic>If you do not know what your gym card ID is, use a barcode scanner app to decode your gym card.</Text>
        <TextInput settingsKey='code' label='ID' />
      </Section>
    </Page>
  )
}

registerSettingsPage(settings)
