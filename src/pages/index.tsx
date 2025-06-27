import { useTranslation } from 'react-i18next';
import { Button, Flex, Text } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent() {
  const { t } = useTranslation();

  return (
    <Flex gap="md" align="center">
      <Button>{t('switchLanguage')}</Button>
      <Text>{t('hello')}</Text>
    </Flex>
  );
}
