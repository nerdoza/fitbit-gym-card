function settings(props) {
  return (
    <Page>
      <Section title={<Text bold align='center'>Gym Key</Text>}>
        <Text bold>Enter your gym key ID string into the ID field.</Text>
        <Text italic>If you do not know what your gym key ID is, use a barcode scanner app to decode your gym key.</Text>
        <TextInput settingsKey='code' label='ID' />
      </Section>
    </Page>
  )
}

registerSettingsPage(settings)
