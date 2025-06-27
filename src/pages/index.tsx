import { useTranslation } from 'react-i18next';
import { Button, Flex, Text } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent() {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Flex gap="md" align="center">
      <Button onClick={switchLanguage}>{t('switchLanguage')}</Button>
      <Text>{t('hello')}</Text>
    </Flex>
  );
}
